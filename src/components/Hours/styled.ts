import styled, { css } from 'styled-components';
import { font } from 'theme';

const flex = css`
  display: flex;
`;

export const Container = styled.div<{ isLoading: boolean }>`
  ${flex};
  align-items: ${(props) => (props.isLoading ? 'center' : 'top')};
  justify-content: center;
  min-height: 240px;
  min-width: 300px;
`;

export const DaysList = styled.div`
  padding: ${(props) => props.theme.space.xs} 0;
  width: 300px;
`;

export const DayItem = styled.div`
  ${flex}
  justify-content: space-between;
  padding: ${(props) => props.theme.space.xs} 0;
  padding-right: 3px;
  border-bottom: 1px solid ${(props) => props.theme.color.fg_2};
`;

export const Day = styled.div`
  ${flex}
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  align-items: center;
`;

export const SlotList = styled.div`
  ${flex}
  flex-wrap: wrap;
  margin-left: ${(props) => props.theme.space.s};
`;

export const SlotItem = styled.div`
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

export const Space = styled.span`
  &::after {
    display: inline-block;
    content: '-';
    visibility: hidden;
  }
`;
