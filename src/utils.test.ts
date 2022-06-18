import add from './utils';

describe('utils/add', () => {
  it('should return a sum of two numbers', () => {
    const a = 1;
    const b = 3;
    expect(add(a, b)).toEqual(4);
  });
});
