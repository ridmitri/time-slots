import { OpeningHours } from 'types';
import { formatHours, FormattedHours } from '../index';

describe('formatHours', () => {
  const H = 3600; // seconds in 1 hour

  it('should convert seconds past midnight to AM hours before 12', () => {
    const mock = [
      {
        type: 'open',
        value: 8 * H,
      },
      {
        type: 'close',
        value: 11 * H,
      },
    ] as OpeningHours[];

    const result = [
      { hour: 8, beforeNoon: true },
      { hour: 11, beforeNoon: true },
    ] as FormattedHours[];

    expect(formatHours(mock)).toEqual(result);
  });

  it('should denote midnight 00:00 as 12 AM, hence before noon', () => {
    const mock = [
      {
        value: 0 * H,
        type: 'open',
      },
    ] as OpeningHours[];

    const result = [{ hour: 12, beforeNoon: true }] as FormattedHours[];

    expect(formatHours(mock)).toEqual(result);
  });

  it('should denote noon as 12 PM, hence not before noon', () => {
    const mock = [
      {
        value: 12 * H,
        type: 'open',
      },
    ] as OpeningHours[];

    const result = [{ hour: 12, beforeNoon: false }] as FormattedHours[];

    expect(formatHours(mock)).toEqual(result);
  });

  it('should convert seconds past midnight to PM hours from 12 to midnight', () => {
    const mock = [
      {
        type: 'open',
        value: 12 * H,
      },
      {
        type: 'close',
        value: 23.99 * H,
      },
    ] as OpeningHours[];

    const result = [
      { hour: 12, beforeNoon: false },
      { hour: 11, beforeNoon: false },
    ] as FormattedHours[];

    expect(formatHours(mock)).toEqual(result);
  });

  it('should return null when opening hours are not provided', () => {
    const mock = [] as OpeningHours[];

    expect(formatHours(mock)).toBeNull();
  });
});
