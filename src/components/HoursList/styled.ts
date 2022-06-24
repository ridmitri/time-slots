import styled, { css } from 'styled-components';

const flex = css`
  display: flex;
`;

export const Container = styled.div`
  ${flex}
  min-width: 500px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ListItem = styled.div`
  ${flex}
  justify-content: space-between;
`;

export const Day = styled.div`
  ${flex}
  text-transform: capitalize;
`;

export const Hours = styled.div`
  ${flex}
`;

export const HoursItem = styled.div`
  ${flex}
`;

export const Closed = styled.div``;
