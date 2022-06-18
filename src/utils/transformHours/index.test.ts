import transformHours, { Payload, Result } from '.';

describe('tranformHours', () => {
  it('should convert seconds past midnight to AM hours before noon', () => {
    const mock = {
      friday: [
        {
          type: 'open',
          value: 36000,
        },
        {
          type: 'close',
          value: 64800,
        },
      ],
      saturday: [
        {
          type: 'open',
          value: 32400,
        },
        {
          type: 'close',
          value: 82800,
        },
      ],
    } as Payload;

    const result = {
      friday: [
        { hour: 10, beforeNoon: true },
        { hour: 6, beforeNoon: false },
      ],
      saturday: [
        { hour: 9, beforeNoon: true },
        { hour: 11, beforeNoon: false },
      ],
    } as Result;
    expect(transformHours(mock)).toEqual(result);
  });
  it('should convert seconds past midnight to PM hours from noon to midnight', () => {});

  it('should return empty array when opening hours are not provided', () => {});

  it('should handle multiple opening intervals per day', () => {});

  it.only('should combine hours from sibling days when opening hours span between multiple days', () => {
    const mock = {
      friday: [
        {
          type: 'open',
          value: 36000,
        },
        {
          type: 'close',
          value: 64800,
        },
        {
          type: 'open',
          value: 82800,
        },
      ],
      saturday: [
        {
          type: 'close',
          value: 7200,
        },
        {
          type: 'open',
          value: 32400,
        },
        {
          type: 'close',
          value: 82800,
        },
      ],
    } as Payload;

    const result = {
      friday: [
        { hour: 10, beforeNoon: true },
        { hour: 6, beforeNoon: false },
        { hour: 11, beforeNoon: false },
        { hour: 2, beforeNoon: true },
      ],
      saturday: [
        { hour: 9, beforeNoon: true },
        { hour: 11, beforeNoon: false },
      ],
    } as Result;
    expect(transformHours(mock)).toEqual(result);
  });
});
