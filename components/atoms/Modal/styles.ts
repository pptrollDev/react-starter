import styled from 'styled-components';
import { BLACK, WHITE } from '../../../styles/colors';

export const Wrapper = styled.div``;

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${BLACK};
  opacity: 0.5;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ContentContainer = styled.div`
  border-radius: 1rem;
  background-color: ${WHITE};
  height: auto;
`;
