export type Slots = {
  day: string;
  slots: Array<{
    slot: string;
    key: string;
  }>;
  key: string;
};

export type Payload = Slots[];
