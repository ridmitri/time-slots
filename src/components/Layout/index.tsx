import React from 'react';
import theme from 'theme';
import AccessTimeIcon from 'components/Icon/AccessTime';
import { Container, Title, Header, Content, Wrapper } from './styled';

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <Container>
      <Wrapper>
        <Header>
          <AccessTimeIcon fill={theme.color.fg_3} />
          <Title>Opening hours</Title>
        </Header>
        <Content>{children}</Content>
      </Wrapper>
    </Container>
  );
}
