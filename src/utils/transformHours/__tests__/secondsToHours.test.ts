import { secondsToHours } from '../index';

describe('secondsToHours', () => {
  it('should convert seconds to hours', () => {
    assert(secondsToHours(3600) === 1);
    assert(secondsToHours(7200) === 2);
  });

  it('should use floor rounding', () => {
    assert(secondsToHours(3601) === 1);
    assert(secondsToHours(3599) === 0);
  });

  it('should handle border values', () => {
    assert(secondsToHours(3600.5) === 1);
    assert(secondsToHours(0) === 0);
  });
});
