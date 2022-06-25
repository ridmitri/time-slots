import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme, { dark } from 'theme';
import Switcher from 'components/Switcher';

type Props = {
  children: React.ReactNode;
};

export default function Provider(props: Props) {
  const { children } = props;
  const [light, setLight] = useState(true);

  return (
    <>
      <Switcher onClick={() => setLight(!light)} light={light} />
      <ThemeProvider theme={light ? theme : dark}>{children}</ThemeProvider>
    </>
  );
}
