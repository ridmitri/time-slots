import { DAYS, DayOfWeek } from 'types/index';

const TODAY = new Date().getDay();

export default function isToday(dayOfWeek: DayOfWeek) {
  return DAYS[TODAY] === dayOfWeek;
}
