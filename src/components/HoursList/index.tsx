import uuid from 'utils/uuid';
import tranformHours, { DayOfWeek } from 'utils/transformHours';
import isToday from 'utils/isToday';

import {
  Container,
  List,
  ListItem,
  Day,
  Hours,
  HoursItem,
  Closed,
} from './styled';
import payload from './payload';

const TODAY = new Date().getUTCDay();

export default function HoursList() {
  const hoursPayload = tranformHours(payload);
  console.log('TODAY', TODAY);

  return (
    <Container>
      <List>
        {Object.entries(hoursPayload).map(([day, hours]) => {
          const dayOfWeek = day as DayOfWeek;
          return (
            <ListItem key={uuid()}>
              <Day>
                {day} {isToday(dayOfWeek) ? 'TODAY' : null}
              </Day>
              {hours === null ? (
                <Closed>Closed</Closed>
              ) : (
                <Hours>
                  {hours?.map((item, i) => (
                    <HoursItem key={uuid()}>
                      <>
                        {i % 2 ? '-' : null} {item.hour}
                        {item.beforeNoon ? ' AM ' : ' PM '}
                        {i && i < hours.length - 1 && i % 2 ? ', ' : null}
                      </>
                    </HoursItem>
                  ))}
                </Hours>
              )}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}
