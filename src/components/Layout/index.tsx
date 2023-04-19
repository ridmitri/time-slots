import React from 'react';
import { useTheme } from 'styled-components';
import AccessTimeIcon from 'components/Icon/AccessTime';
import { Container, Title, Header, Wrapper, Small } from './styled';

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
          <Title>Time slots <Small>(CET timezone)</Small></Title>
        </Header>
        {children}
      </Wrapper>
    </Container>
  );
}
