import { describe, expect, it, beforeEach, vi } from 'vitest';
import transformPayload from './csv';

vi.mock('utils/uuid', () => ({
  default: vi.fn().mockReturnValue('key'),
}));

describe('transformPayload', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return an empty array when payload is empty', () => {
    expect(transformPayload('')).toEqual([]);
  });

  it('should return an empty array when payload is undefined', () => {
    expect(transformPayload(undefined)).toEqual([]);
  });

  it('should transform payload correctly', () => {
    const payload = `name,Monday,Tuesday\nslot1,9:00-10:00,-\nslot2,-,10:00-11:00`;

    const expectedOutput = [
      {
        day: 'Monday',
        slots: [
          {
            slot: '9:00-10:00',
            key: 'key',
          },
        ],
        key: 'key',
      },
      {
        day: 'Tuesday',
        slots: [
          {
            slot: '10:00-11:00',
            key: 'key',
          },
        ],
        key: 'key',
      },
    ];

    expect(transformPayload(payload)).toEqual(expectedOutput);
  });
});
