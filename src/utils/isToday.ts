import { DAYS, DayOfWeek } from './transformHours';

const TODAY = new Date().getDay();

export default function isToday(dayOfWeek: DayOfWeek) {
  return DAYS[TODAY - 1] === dayOfWeek;
}
