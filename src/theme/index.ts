import { css } from 'styled-components';

const theme = {
  fontSize: {
    s: '12px',
    m: '15px',
    l: '17px',
    xl: '26px',
  },
  color: {
    bg: '#fff',
    fg: '#202125',
    green: '#5bcb02',
    fg_1: '#f8f8f8',
    fg_2: '#eee',
    fg_3: '#a1a2a4',
  },
  space: {
    xs: '10px',
    s: '12px',
    m: '15px',
    l: '20px',
    xl: '30px',
  },
};

const bold = css`
  font-weight: 700;
`;

const regular = css`
  font-weight: 400;
`;

const medium = css`
  font-weight: 500;
`;

const light = css`
  font-weight: 300;
`;

export const font = {
  bold,
  regular,
  medium,
  light,
};

export default theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    color: {
      fg: string;
      bg: string;
      green: string;
      fg_1: string;
      fg_2: string;
      fg_3: string;
    };
    space: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}
