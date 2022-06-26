import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { primary, secondary } from 'theme';
import Switcher from 'components/Switcher';

type Props = {
  children: React.ReactNode;
};

export default function Provider(props: Props) {
  const { children } = props;
  const [isPrimary, setTheme] = useState(true);

  return (
    <>
      <Switcher onClick={() => setTheme(!isPrimary)} primary={isPrimary} />
      <ThemeProvider theme={isPrimary ? primary : secondary}>
        {children}
      </ThemeProvider>
    </>
  );
}
