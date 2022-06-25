import uuid from 'utils/uuid';
import tranformHours, { DayOfWeek } from 'utils/transformHours';
import isToday from 'utils/isToday';
import payload from 'utils/payload';

import {
  Container,
  DaysList,
  DayItem,
  Day,
  HoursList,
  HoursItem,
  Closed,
} from './styled';

export default function Hours() {
  const hoursPayload = tranformHours(payload);

  return (
    <Container>
      <DaysList>
        {Object.entries(hoursPayload).map(([day, hours]) => {
          const dayOfWeek = day as DayOfWeek;
          return (
            <DayItem key={uuid()}>
              <Day>
                {day} {isToday(dayOfWeek) ? 'TODAY' : null}
              </Day>
              {hours === null ? (
                <Closed>Closed</Closed>
              ) : (
                <HoursList>
                  {hours?.map((item, i) => (
                    <HoursItem key={uuid()}>
                      <>
                        {i % 2 ? '-' : null} {item.hour}
                        {item.beforeNoon ? ' AM ' : ' PM '}
                        {i && i < hours.length - 1 && i % 2 ? ', ' : null}
                      </>
                    </HoursItem>
                  ))}
                </HoursList>
              )}
            </DayItem>
          );
        })}
      </DaysList>
    </Container>
  );
}
