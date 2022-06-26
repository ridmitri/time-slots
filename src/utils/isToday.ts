import { DayOfWeek } from 'types/index';

const indexedDays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as const;

const TODAY = new Date().getDay();

export default function isToday(dayOfWeek: DayOfWeek) {
  return indexedDays[TODAY] === dayOfWeek;
}
