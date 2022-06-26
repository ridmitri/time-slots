import { DAYS, DayOfWeek, OpeningHours, Payload } from 'types/index';

import getNextElement from '../array/getNextElement';

const SECONDS_IN_HOUR = 3600;

export const secondsToHours = (seconds: number) => {
  const hours = seconds / SECONDS_IN_HOUR;
  // use math floor to get amount of whole hours
  return Math.floor(hours);
};

export type FormattedHours = {
  hour: number;
  beforeNoon: boolean;
};

export type Result = Record<DayOfWeek, FormattedHours[] | null>;

export const shiftHours = (payload: Payload) => {
  const result = {} as Payload;

  Object.entries(payload).forEach(([key, openingHours]) => {
    const dayOfWeek = key as keyof Payload;
    result[dayOfWeek] = payload[dayOfWeek];

    if (openingHours.at(-1)?.type === 'open') {
      const nextDay = getNextElement(dayOfWeek, Array.from(DAYS));

      // mutate next day's payload by shifting its first value
      const shiftedHours = payload[nextDay].shift() as OpeningHours;
      result[dayOfWeek].push(shiftedHours);
    }
  });

  return result;
};

export const formatHours = (
  openingHours: OpeningHours[],
): FormattedHours[] | null => {
  if (!openingHours?.length) {
    return null;
  }

  const SECONDS_BEFORE_NOON = 12 * SECONDS_IN_HOUR;

  return openingHours.map(({ value }) => {
    const isBeforeNoon = value < SECONDS_BEFORE_NOON;
    const item: FormattedHours = {
      hour: secondsToHours(value) % 12 || 12, // 0 hours means 12 before noon
      beforeNoon: isBeforeNoon,
    };
    return item;
  });
};

export default function tranformHours(payload: Payload): Result {
  const result = {} as Result;

  const shiftedPayload = shiftHours(payload);

  Array.from(DAYS).forEach((dayOfWeek) => {
    const todayHours = shiftedPayload[dayOfWeek];
    result[dayOfWeek] = formatHours(todayHours);
  });

  return result;
}
