import { useQuery } from 'react-query';
import uuid from 'utils/uuid';
import tranformHours, { DayOfWeek, Payload } from 'utils/transformHours';
import isToday from 'utils/isToday';
import Spinner from 'components/Spinner';

import { fetchOpeningHours, queryKey } from './queryFunctions';

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
  const { isLoading, data } = useQuery<Payload>(queryKey, fetchOpeningHours);

  return (
    <Container loading={isLoading}>
      <Spinner loading={isLoading} />

      {data && (
        <DaysList>
          {Object.entries(tranformHours(data)).map(([day, hours]) => {
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
      )}
    </Container>
  );
}
