import React from 'react';
import { useTheme } from 'styled-components';
import AccessTimeIcon from 'components/Icon/AccessTime';
import { Container, Title, Header, Content, Wrapper } from './styled';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;
  const theme = useTheme();

  return (
    <Container>
      <Wrapper>
        <Header>
          <AccessTimeIcon fill={theme.color.fg_3} />
          <Title>Time slots</Title>
        </Header>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
}
