import transformHours from '.';

describe('tranformHours', () => {
  const mock = {
    friday: [
      {
        type: 'open',
        value: 64800,
      },
    ],
    saturday: [
      {
        type: 'close',
        value: 3600,
      },
      {
        type: 'open',
        value: 32400,
      },
      {
        type: 'close',
        value: 39600,
      },
      {
        type: 'open',
        value: 57600,
      },
      {
        type: 'close',
        value: 82800,
      },
    ],
  };

  it('should return its args', () => {
    expect(transformHours(mock)).toEqual(mock);
  });
});
