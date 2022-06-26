export const DAYS = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const;

export type DayOfWeek = typeof DAYS[number];

export type OpeningHours = {
  type: 'open' | 'close';
  value: number;
};

export type Payload = Record<DayOfWeek, OpeningHours[]>;
