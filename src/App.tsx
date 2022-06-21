import styled from 'styled-components';

const Bold = styled.div`
  font-weight: 700;
  font-family: 'Roboto';
`;

const Regular = styled.div`
  font-weight: 400; ;
`;

const Medium = styled.div`
  font-weight: 500;
`;

const Light = styled.div`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.color.green};
`;

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.color.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.white}; ;
`;

function App() {
  const title = 'Example';

  return (
    <Container>
      <Header>
        <Bold>{title}</Bold>
        <Medium>{title}</Medium>
        <Regular>{title}</Regular>
        <Light>{title}</Light>
      </Header>
    </Container>
  );
}

export default App;
