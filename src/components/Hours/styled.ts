import styled, { css } from 'styled-components';
import { font } from 'theme';

const flex = css`
  display: flex;
`;

export const Container = styled.div``;

export const DaysList = styled.div`
  padding-bottom: ${(props) => props.theme.space.xs};
`;

export const DayItem = styled.div`
  ${flex}
  justify-content: space-between;
  padding: ${(props) => props.theme.space.xs} 0;
  padding-right: 3px;
  font-size: ${(props) => props.theme.fontSize.l};
  border-bottom: 1px solid ${(props) => props.theme.color.fg_2};
`;

export const Day = styled.div`
  ${flex}
  ${font.medium}
  text-transform: capitalize;
  align-items: center;
`;

export const HoursList = styled.div`
  ${flex}
`;

export const HoursItem = styled.div`
  ${flex}
`;

export const Closed = styled.div`
  color: ${(props) => props.theme.color.fg_3};
`;

export const Today = styled.div`
  ${font.medium};
  font-size: ${(props) => props.theme.fontSize.s};
  text-transform: uppercase;
  color: ${(props) => props.theme.color.green};
  margin-left: ${(props) => props.theme.space.s};
`;

const spaceSymbol = css`
  content: '-';
  visibility: hidden;
  display: inline-block;
`;

export const Dash = styled.span`
  &::before,
  &::after {
    ${spaceSymbol}
  }
`;

export const Value = styled.span`
  &::after {
    ${spaceSymbol};
  }
`;
export const Separator = styled.span`
  &::after {
    ${spaceSymbol};
  }
`;
