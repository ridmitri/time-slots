const theme = {
  fontSize: {
    s: '12px',
    m: '16px',
    l: '22px',
    xl: '30px',
  },
  color: {
    white: '#fff',
    black: '#202125',
    green: '#5bcb02',
    gray_1: '#f8f8f8',
    gray_2: '#eee',
    gray_3: '#a1a2a4',
  },
};

export default theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      [key: string]: string;
    };
    color: {
      white: string;
      black: string;
      green: string;
      gray_1: string;
      gray_2: string;
      gray_3: string;
    };
  }
}
