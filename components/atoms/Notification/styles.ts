import styled from 'styled-components';
import { GRAY_80, WHITE } from '../../../styles/colors';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  div {
    border-radius: 1rem;
    padding: 1.5rem 3rem;
    background-color: ${GRAY_80};
    color: ${WHITE};
    font-size: 1.125rem;
    display: flex;
    align-items: center;

    img {
      margin-right: 0.625rem;
      width: 1.5rem;
    }
  }
`;
