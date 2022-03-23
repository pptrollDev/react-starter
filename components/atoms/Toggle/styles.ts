import styled from 'styled-components';
import { BLUE_60, GRAY_30, WHITE } from '../../../styles/colors';

export const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 2.25rem;
  height: 1.25rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1.5rem;
    background-color: ${GRAY_30};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1rem;
    width: 1rem;
    left: 0.125rem;
    bottom: 0.125rem;
    border-radius: 50%;
    background-color: ${WHITE};
    box-shadow: 0px 0px 0.375rem rgba(0, 0, 0, 0.25);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${BLUE_60};
  }

  input:focus + .slider {
    box-shadow: 0 0 0.0625rem ${BLUE_60};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(1rem);
    -ms-transform: translateX(1rem);
    transform: translateX(1rem);
  }
`;
