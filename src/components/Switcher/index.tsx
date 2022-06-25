import BedTime from 'components/Icon/BedTime';
import Brightness5 from 'components/Icon/Brightness5';
import { Button } from './styled';

export type Props = {
  onClick: () => void;
  light: boolean;
};

export default function Switcher(props: Props) {
  const { light, onClick } = props;
  return (
    <Button onClick={onClick}>{light ? <Brightness5 /> : <BedTime />}</Button>
  );
}
