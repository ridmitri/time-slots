import secondsToHours, { beforeNoon } from '../secondsToHours';

const DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const;

type DayOfWeek = typeof DAYS[number];

type OpeningHours = {
  type: 'open' | 'close';
  value: number;
};

export type Payload = Record<DayOfWeek, OpeningHours[]>;

export type TransformedValue = {
  hour: number;
  beforeNoon: boolean;
};

export type Result = Record<DayOfWeek, TransformedValue[] | null>;

const getNextDay = (dayOfWeek: DayOfWeek, days = DAYS) => {
  const todayIndex = days.indexOf(dayOfWeek);
  const nextDay = days[(todayIndex + 1) % days.length];

  return nextDay;
};

const shiftNightHours = (payload: Payload) => {
  const result = {} as Payload;

  Object.entries(payload).forEach(([key, openingHours]) => {
    const dayOfWeek = key as keyof Payload;
    result[dayOfWeek] = payload[dayOfWeek];

    if (openingHours[openingHours.length - 1].type === 'open') {
      const nextDay = getNextDay(dayOfWeek);

      // mutate next day's payload and get current day's close hours shifted
      const shiftedHours = payload[nextDay].shift() as OpeningHours;
      result[dayOfWeek].push(shiftedHours);
    }
  });

  return result;
};

const formatHours = (openingHours: OpeningHours[]): Result[keyof Result] => {
  if (!openingHours.length) {
    return null;
  }

  return openingHours.map(({ value }) => {
    const isBeforeNoon = beforeNoon(value);
    const item: TransformedValue = {
      hour: secondsToHours(value) % 12,
      beforeNoon: isBeforeNoon,
    };
    return item;
  });
};

export default function tranformHours(payload: Payload): Result {
  const result = {} as Result;

  const shiftedPayload = shiftNightHours(payload);

  Object.entries(shiftedPayload).forEach(([dayOfWeek, todayHours]) => {
    const day = dayOfWeek as keyof Payload;

    result[day] = formatHours(todayHours);
  });
  return result;
}
