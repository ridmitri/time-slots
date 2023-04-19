import { HoursItem, Space } from './styled';

export type Props = {
  index: number;
  slotItem: string;
};

export default function DisplayTime(props: Props) {
  const { index, slotItem } = props;

  return (
    <HoursItem>
      {index % 2 ? <Space>,</Space> : null}
      {slotItem}
    </HoursItem>
  );
}
