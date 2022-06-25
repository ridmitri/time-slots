import { Payload } from 'types/index';
import tranformHours, { Result } from '../index';

describe('tranformHours', () => {
  const H = 3600; // seconds in 1 hour

  it('should shift and format hours', () => {
    const mock = {
      friday: [
        {
          type: 'open',
          value: 10 * H,
        },
        {
          type: 'close',
          value: 18 * H,
        },
        {
          type: 'open',
          value: 23 * H,
        },
      ],
      saturday: [
        {
          type: 'close',
          value: 2 * H,
        },
        {
          type: 'open',
          value: 9 * H,
        },
        {
          type: 'close',
          value: 23.99 * H,
        },
      ],
    } as Payload;

    const result = {
      friday: [
        {
          hour: 10,
          beforeNoon: true,
        },
        {
          hour: 6,
          beforeNoon: false,
        },
        {
          hour: 11,
          beforeNoon: false,
        },
        {
          hour: 2,
          beforeNoon: true,
        },
      ],
      saturday: [
        {
          hour: 9,
          beforeNoon: true,
        },
        {
          hour: 11,
          beforeNoon: false,
        },
      ],
    } as Result;

    expect(tranformHours(mock)).toEqual(result);
  });
});
