import BedTime from 'components/Icon/BedTime';
import Brightness5 from 'components/Icon/Brightness5';
import { Button } from './styled';

export type Props = {
  onClick: () => void;
  primary: boolean;
};

export default function Switcher(props: Props) {
  const { primary, onClick } = props;
  return (
    <Button onClick={onClick}>{primary ? <Brightness5 /> : <BedTime />}</Button>
  );
}
