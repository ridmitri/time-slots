import { useQuery } from 'react-query';
import Spinner from 'components/Spinner';

import { Payload } from 'types';
import { fetchOpeningHours, queryKey } from './queryFunctions';
import DisplayTime from './DisplayTime';

import { Container, DaysList, DayItem, Day, HoursList, Closed } from './styled';

export default function Hours() {
  const { isLoading, data } = useQuery<Payload>(queryKey, fetchOpeningHours);

  return (
    <Container>
      <Spinner loading={isLoading} />

      {data && (
        <DaysList>
          {data.map(({ day, slots, key }) => (
            <DayItem key={key}>
              <Day>{day}</Day>
              {slots.length === 0 ? (
                <Closed>-</Closed>
              ) : (
                <HoursList>
                  {slots?.map((item, i) => (
                    <DisplayTime
                      key={item.key}
                      slotItem={item.slot}
                      index={i}
                    />
                  ))}
                </HoursList>
              )}
            </DayItem>
          ))}
        </DaysList>
      )}
    </Container>
  );
}
