import { StyledSpinner } from './styled';

type Props = {
  loading: boolean;
};

export default function Spinner(props: Props) {
  const { loading } = props;

  if (!loading) {
    return null;
  }

  return (
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  );
}
