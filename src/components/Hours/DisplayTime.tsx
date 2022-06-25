import { FormattedHours } from 'utils/transformHours';
import { HoursItem, Space } from './styled';

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
      {index % 2 ? (
        <>
          <Space />-<Space />
        </>
      ) : null}
      {hour}
      <Space />
      {beforeNoon ? 'AM' : 'PM'}
      {index && index < listLength - 1 && index % 2 ? (
        <>
          ,<Space />
        </>
      ) : null}
    </HoursItem>
  );
}
