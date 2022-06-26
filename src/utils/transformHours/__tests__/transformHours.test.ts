import { OpeningHours, Payload } from 'types/index';
import tranformHours, { Result } from '../index';

describe('tranformHours', () => {
  const H = 3600; // seconds in 1 hour
  const emptyHours = [] as OpeningHours[];

  it('should shift and format hours', () => {
    const mock = {
      monday: emptyHours,
      tuesday: emptyHours,
      wednesday: emptyHours,
      thursday: emptyHours,
      sunday: emptyHours,

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
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      sunday: null,

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

  it('should populate missing days for the payload and assign them to null', () => {
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
      ],
    } as Payload;

    const result = {
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      sunday: null,
      saturday: null,

      friday: [
        {
          hour: 10,
          beforeNoon: true,
        },
        {
          hour: 6,
          beforeNoon: false,
        },
      ],
    } as Result;

    expect(tranformHours(mock)).toEqual(result);
  });

  it('should order days from monday to sunday regardless the initial payload keys order', () => {
    const mock = {
      monday: emptyHours,
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
      sunday: emptyHours,

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
    } as Payload;

    const result = {
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      sunday: null,

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
