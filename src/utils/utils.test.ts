import { transformPayload } from './transformPayload';

describe('transformPayload', () => {
  const payload = `Date,Mon 17,Tue 18,Wed 19,Thu 20,Fri 21
Slot,-,-,10:00 - 12:30,-,-
Slot,-,13:30 - 16:30,-,-,13:30 - 16:30`;

  const result = transformPayload(payload);

  it('should return an array of objects with day and slots properties', () => {
    expect(result).toBeInstanceOf(Array);
    result.forEach((item) => {
      expect(item).toHaveProperty('day');
      expect(item).toHaveProperty('slots');
    });
  });

  it('should correctly transform the payload', () => {
    expect(result).toEqual([
      {
        day: 'Mon 17',
        slots: ['-', '-'],
      },
      {
        day: 'Tue 18',
        slots: ['-', '13:30 - 16:30'],
      },
      {
        day: 'Wed 19',
        slots: ['10:00 - 12:30', '-'],
      },
      {
        day: 'Thu 20',
        slots: ['-', '-'],
      },
      {
        day: 'Fri 21',
        slots: ['-', '13:30 - 16:30'],
      },
    ]);
  });
});
