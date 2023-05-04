import { useQuery } from '@tanstack/react-query';
import Spinner from 'components/Spinner';

import { Payload } from 'types';
import { fetchOpeningHours, queryKey } from './queryFunctions';

import {
  Container,
  DaysList,
  DayItem,
  Day,
  SlotList,
  Closed,
  Space,
  SlotItem,
} from './styled';

export default function Hours() {
  const { isLoading, data } = useQuery<Payload>({
    queryKey: [queryKey],
    queryFn: fetchOpeningHours,
    refetchInterval: 1000 * 60,
  });

  return (
    <Container isLoading={isLoading}>
      <Spinner loading={isLoading} />

      {data && (
        <DaysList>
          {data.map(({ day, slots, key }) => (
            <DayItem key={key}>
              <Day>{day}</Day>
              {slots.length === 0 ? (
                <Closed>-</Closed>
              ) : (
                <SlotList>
                  {slots?.map((item, i) => (
                    <SlotItem key={item.key}>
                      {i % 2 ? <Space>,</Space> : null}
                      {item.slot}
                    </SlotItem>
                  ))}
                </SlotList>
              )}
            </DayItem>
          ))}
        </DaysList>
      )}
    </Container>
  );
}
