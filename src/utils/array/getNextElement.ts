export default function getNextElement<T>(value: T, array: T[]) {
  const index = array.indexOf(value);
  const nextElement = array[(index + 1) % array.length];

  return nextElement;
}
