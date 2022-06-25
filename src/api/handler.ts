import { setupWorker, rest } from 'msw';
import { Payload } from 'types/index';
import payload from './payload';

const worker = setupWorker(
  rest.get<Payload>('/opening-hours', (req, res, ctx) =>
    res(ctx.json(payload)),
  ),
);

worker.start().catch(() => {
  // console is sufficient for reporting in Dev mode
  // eslint-disable-next-line no-console
  console.log('MSW worker setup failed.');
});
