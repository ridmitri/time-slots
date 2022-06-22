import styled from 'styled-components';
import AccessTimeIcon from 'components/Icon/AccessTime';
import { font } from 'components/theme';

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.black};
`;

const Title = styled.h1`
  ${font.bold}
  margin-left: 10px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.white};
  border-bottom: 2px solid;
  border-bottom-color: ${(props) => props.theme.color.white};
`;

function App() {
  const title = 'Opening hours';

  return (
    <Container>
      <Header>
        <AccessTimeIcon />
        <Title>{title}</Title>
      </Header>
    </Container>
  );
}

export default App;
