import styled from 'styled-components';
import { GRAY_100, GRAY_30, GRAY_80, WHITE } from '../../../styles/colors';

export const Wrapper = styled.div`
  position: relative;

  button {
    padding: 0;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: inherit;

    span {
      margin-right: 0.625rem;
      color: ${GRAY_80};
      font-weight: bold;
      font-size: 0.75rem;
    }

    img {
      width: 1rem;
    }
  }
`;

export const OptionsWrapper = styled.div`
  margin-top: 0.5rem;
  position: absolute;
  right: 0;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgba(17, 23, 35, 0.15);
  z-index: 1;
  background-color: ${WHITE};
  min-width: 10.5rem;
  overflow: auto;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  border-bottom: 1px solid ${GRAY_30};
  padding: 0.625rem 1rem 0.5625rem 1rem;
  color: ${GRAY_100};
  font-weight: 500;
  font-size: 0.8125rem;
`;
