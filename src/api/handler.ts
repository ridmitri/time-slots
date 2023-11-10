import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser'

const worker = setupWorker(
  http.get('/time-slots', () => {
    const payload = `Date,Mon 17,Tue 18,Wed 19,Thu 20,Fri 21
    Slot,-,-,10:00 - 12:30,-,9:30 - 10:15
    Slot,-,13:30 - 16:30,-,-,-`;

    return HttpResponse.json(payload)
  }),
);

worker.start().catch(() => {
  // console is sufficient for reporting in Dev mode
  // eslint-disable-next-line no-console
  console.log('MSW worker setup failed.');
});
