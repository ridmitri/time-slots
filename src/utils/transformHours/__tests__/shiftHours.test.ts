import { Payload } from 'types/index';
import { shiftHours } from '../index';

describe('shiftHours', () => {
  const H = 3600; // seconds in 1 hour

  it('should combine hours from sibling days when opening hours span over midnight', () => {
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
          value: 23 * H,
        },
      ],
    } as Payload;

    const result = {
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
        {
          type: 'close',
          value: 2 * H,
        },
      ],
      saturday: [
        {
          type: 'open',
          value: 9 * H,
        },
        {
          type: 'close',
          value: 23 * H,
        },
      ],
    } as Payload;

    expect(shiftHours(mock)).toEqual(result);
  });
});
