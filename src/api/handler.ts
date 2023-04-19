import { setupWorker, rest } from 'msw';

const worker = setupWorker(
  rest.get<string>('/opening-hours', (req, res, ctx) => {
    const payload = `Date,Mon 17,Tue 18,Wed 19,Thu 20,Fri 21
Slot,-,-,10:00 - 12:30,-,9:30 - 10:15
Slot,-,13:30 - 16:30,-,-,13:30 - 16:30`;
    return res(ctx.text(payload));
  }),
);

worker.start().catch(() => {
  // console is sufficient for reporting in Dev mode
  // eslint-disable-next-line no-console
  console.log('MSW worker setup failed.');
});
