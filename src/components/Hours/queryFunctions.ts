const sleep = async (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

export const fetchOpeningHours = async () => {
  const response = await fetch('/opening-hours');
  if (!response.ok) {
    throw new Error('Network error');
  }

  await sleep(1000);

  return response.json();
};

export const queryKey = 'opening-hours';
