import secondsToHours, { beforeNoon } from '../secondsToHours';

type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

type OpeningHours = {
  type: 'open' | 'close';
  value: number;
};

export type Payload = {
  [key in DayOfWeek]: OpeningHours[];
};

export type TransformedValue = {
  type: 'open' | 'close';
  hour: number;
  beforeNoon: boolean;
};

type TransformedHours = TransformedValue[];

export type Result = {
  [key in DayOfWeek]?: TransformedHours | null;
};

const getNextDay = (dayOfWeek: DayOfWeek) => {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ] as const;

  const todayIndex = days.indexOf(dayOfWeek);
  const nextDay = days[(todayIndex + 1) % 7];

  return nextDay;
};

const N_A = -1;

const arrangeOverlappingDays = (payload: Payload, notAssigned = N_A) => {
  const result = {} as Payload;

  Object.entries(payload).forEach(([dayOfWeek, openingHours]) => {
    const day = dayOfWeek as keyof Payload;
    result[day] = payload[day];

    if (openingHours[openingHours.length - 1].type === 'open') {
      const nextDay = getNextDay(day);
      if (nextDay?.length && payload[nextDay][0].type === 'close') {
        const overlappedDay = payload[nextDay].shift() as OpeningHours;

        result[day].push(overlappedDay);
      } else {
        result[day].push({
          type: 'close',
          value: notAssigned,
        });
      }
    }
  });

  return result;
};

const formatHours = (openingHours: OpeningHours[]): Result[keyof Result] => {
  if (!openingHours.length) {
    return null;
  }

  const resultHours = [] as TransformedValue[];

  while (openingHours.length) {
    const { value } = openingHours.shift() as OpeningHours;
    const isBeforeNoon = beforeNoon(value);

    const item = {
      hour: secondsToHours(value) % 12,
      beforeNoon: isBeforeNoon,
    } as TransformedValue;

    resultHours.push(item);
  }

  return resultHours;
};

export default function tranformHours(payload: Payload): Result {
  const result: Result = {};

  const reArrangedPayload = arrangeOverlappingDays(payload);

  Object.entries(reArrangedPayload).forEach(([dayOfWeek, todayHours]) => {
    const day = dayOfWeek as keyof Payload;

    result[day] = formatHours(todayHours);
  });
  return result;
}
