import transformPayload from 'utils/csv';

const GDOC_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTn-kJSdqFXD1saAwvnPKHOzLrv5ES8ICyHN38PQzYvfBZhY06PJSZyG4hm0GPQyEZzoXNmE7jG8L9H/pub?output=csv`;
const MOCK_URL = '/time-slots';

export const fetchOpeningHours = async () => {
  const dataUrl = import.meta.env.VITE_MSW ? MOCK_URL : GDOC_URL;
  const response = await fetch(dataUrl, {
    headers: {
      'content-type': 'text/csv;charset=UTF-8',
    },
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Network error');
  }

  const csv = await response.text();
  const data = transformPayload(csv);
  return data;
};

export const queryKey = 'opening-hours';
