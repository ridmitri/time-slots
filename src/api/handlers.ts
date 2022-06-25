import { setupWorker, rest } from 'msw';
import { Payload } from 'utils/transformHours';
import payload from './payload';

const startWorker = async () => {
  const worker = setupWorker(
    rest.get<Payload>('/opening-hours', (req, res, ctx) =>
      res(ctx.json(payload)),
    ),
  );

  await worker.start();
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
startWorker();
