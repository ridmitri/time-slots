const SECONDS_IN_HOUR = 3600;

export default function secondsToHours(
  seconds: number,
  secondsInHour = SECONDS_IN_HOUR,
) {
  const hours = seconds / secondsInHour;
  return Math.floor(hours);
}

export const beforeNoon = (value: number) => 12 * SECONDS_IN_HOUR > value;
