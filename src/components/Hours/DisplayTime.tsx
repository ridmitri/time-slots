import { FormattedHours } from 'utils/transformHours';
import { HoursItem, Dash, Separator, Value } from './styled';

type Props = {
  index: number;
  listLength: number;
  hoursItem: FormattedHours;
};

export default function DisplayTime(props: Props) {
  const { index, listLength, hoursItem } = props;
  const { hour, beforeNoon } = hoursItem;

  return (
    <HoursItem>
      {index % 2 ? <Dash>-</Dash> : null}
      <Value>{hour}</Value>
      {beforeNoon ? 'AM' : ' PM '}
      {index && index < listLength - 1 && index % 2 ? (
        <Separator>,</Separator>
      ) : null}
    </HoursItem>
  );
}
