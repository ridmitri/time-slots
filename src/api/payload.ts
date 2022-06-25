import { Payload } from 'types/index';

const H = 3600;

const payload: Payload = {
  monday: [],
  tuesday: [
    { type: 'open', value: 9 * H },
    { type: 'close', value: 14 * H },
    { type: 'open', value: 16 * H },
    { type: 'close', value: 22 * H },
  ],
  wednesday: [
    { type: 'open', value: 9 * H },
    { type: 'close', value: 16 * H },
    { type: 'open', value: 20 * H },
  ],
  thursday: [
    { type: 'close', value: 4 * H },
    { type: 'open', value: 12 * H },
    { type: 'close', value: 20 * H },
  ],
  friday: [
    { type: 'open', value: 32400 },
    { type: 'close', value: 72000 },
  ],
  saturday: [],
  sunday: [
    { type: 'open', value: 8 * H },
    { type: 'close', value: 23 * H },
  ],
};

export default payload;
