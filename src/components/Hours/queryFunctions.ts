import transformPayload from 'utils/csv';

// const DATA_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTn-kJSdqFXD1saAwvnPKHOzLrv5ES8ICyHN38PQzYvfBZhY06PJSZyG4hm0GPQyEZzoXNmE7jG8L9H/pub?gid=0&single=true&output=csv`;

export const fetchOpeningHours = async () => {
  const response = await fetch('/opening-hours', {
    headers: {
      'content-type': 'text/csv;charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error('Network error');
  }

  // const sheet = await fetch(DATA_URL, {
  //   method: 'get',
  //   cache: 'no-store',
  //   headers: {
  //     'content-type': 'text/csv;charset=UTF-8',
  //   },
  // });

  const csv = await response.text();
  const data = transformPayload(csv);
  return data;
};

export const queryKey = 'opening-hours';
