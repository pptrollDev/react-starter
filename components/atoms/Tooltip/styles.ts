import styled from 'styled-components';
import { GRAY_90, WHITE } from '../../../styles/colors';

export const Wrapper = styled.div`
  margin-left: 0.625rem;
  position: relative;
  display: inline-block;
  cursor: help;

  img {
    width: 1.25rem;
  }

  &:hover {
    div {
      visibility: visible;
    }
  }
`;

export const SquareWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  left: 0.3125rem;
  background-color: ${GRAY_90};
  width: 0.625rem;
  height: 0.625rem;
  transform: rotate(45deg);
`;

export const labelWrapper = styled.div`
  z-index: 1;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  visibility: hidden;
  position: absolute;
  left: -1.25rem;
  top: 1.875rem;
  background-color: ${GRAY_90};
  color: ${WHITE};
  font-size: 0.8125rem;
  white-space: nowrap;
`;
