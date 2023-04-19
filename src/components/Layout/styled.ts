import styled from 'styled-components';
import { font } from 'theme';

export const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.fg_1};
  color: ${(props) => props.theme.color.fg};
  flex-direction: column;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.bg};
  padding: ${(props) => props.theme.space.xl};
  border-radius: ${(props) => props.theme.space.xs};

  /* Shadow 4dp */
  box-shadow: ${(props) => props.theme.shadow};
`;

export const Title = styled.h1`
  ${font.bold}
  font-size: ${(props) => props.theme.fontSize.xl};
  margin-left: ${(props) => props.theme.space.xs};
`;

export const Header = styled.header`
  display: flex;
  text-align: left;
  align-items: center;
  padding: ${(props) => props.theme.space.s} 0;
  color: ${(props) => props.theme.color.fg};
  border-bottom: 2px solid;
  border-bottom-color: ${(props) => props.theme.color.fg};
`;

export const Content = styled.div`
  width: 300px;
`;
