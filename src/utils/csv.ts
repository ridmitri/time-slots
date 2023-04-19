import uuid from 'utils/uuid';
import { Payload } from 'types';

export default function transformPayload(payload: string): Payload {
  if (!payload) {
    return [] as Payload;
  }
  const lines = payload.split('\n');
  const header = lines[0].split(',');
  const slotsData = lines.slice(1);

  const result = [];

  for (let i = 1; i < header.length; i += 1) {
    const day = header[i];
    const slots = slotsData.map((slotRow) => slotRow.split(',')[i]);
    result.push({
      day,
      slots: slots
        .filter((item) => item.trim() !== '-')
        .map((slot) => ({
          slot,
          key: uuid(),
        })),
      key: uuid(),
    });
  }

  return result;
}
