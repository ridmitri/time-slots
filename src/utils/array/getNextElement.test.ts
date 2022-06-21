import getNextElement from './getNextElement';

describe('getNextElement', () => {
  it('should return next value from given array', () => {
    const value = 2;
    const array = [3, 2, 1];
    const result = 1;
    expect(getNextElement(value, array)).toEqual(result);
  });
  it('should wrap iteration by returning first element after last', () => {
    const array = ['first', 'second', 'third'];
    const value = 'third';
    const result = 'first';
    expect(getNextElement(value, array)).toEqual(result);
  });
});
