const MILLISECONDS_IN_HOUR = 3600000;

export default function millisecondsToHours(
  milliseconds: number,
  millisecondsInHour = MILLISECONDS_IN_HOUR,
) {
  const hours = milliseconds / millisecondsInHour;
  return Math.floor(hours);
}
