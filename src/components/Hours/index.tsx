import uuid from 'utils/uuid';
import tranformHours, { DayOfWeek } from 'utils/transformHours';
import isToday from 'utils/isToday';
import payload from 'utils/payload';

import DisplayTime from './DisplayTime';
import {
  Container,
  DaysList,
  DayItem,
  Day,
  HoursList,
  Closed,
  Today,
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
                {day} {isToday(dayOfWeek) ? <Today>Today</Today> : null}
              </Day>
              {hours === null ? (
                <Closed>Closed</Closed>
              ) : (
                <HoursList>
                  {hours?.map((item, i) => (
                    <DisplayTime
                      key={uuid()}
                      listLength={hours.length}
                      hoursItem={item}
                      index={i}
                    />
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
