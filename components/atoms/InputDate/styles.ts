import styled from 'styled-components';
import {
  GRAY_10,
  GRAY_100,
  GRAY_20,
  GRAY_40,
  GRAY_50,
  GRAY_70,
  RED_60,
  WHITE
} from '../../../styles/colors';

export const Wrapper = styled.div`
  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__tab-loop {
    position: fixed;
  }
`;

export const InputWrapper = styled.div<{
  disabled: boolean;
  isError: boolean;
  size: 'large' | 'middle' | 'small';
}>`
  display: flex;
  align-items: center;
  height: 2.375rem;
  border-radius: ${(props) => {
    switch (props.size) {
      case 'large':
        return '1rem';
        break;
      case 'middle':
        return '0.75rem';
        break;
      case 'small':
        return '0.75rem';
        break;
    }
  }};
  padding: 0 1rem;
  border: 1px solid
    ${(props) => (props.disabled ? GRAY_20 : props.isError ? RED_60 : GRAY_40)};
  background-color: ${(props) =>
    props.disabled ? GRAY_20 : props.isError ? GRAY_10 : WHITE};
  height: ${(props) => {
    switch (props.size) {
      case 'large':
        return '3.25rem';
        break;
      case 'middle':
        return '2.75rem';
        break;
      case 'small':
        return '2.375rem';
        break;
    }
  }};

  &:focus-within {
    border: 1px solid ${GRAY_100};
    background-color: ${GRAY_10};
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    color: ${GRAY_100};
    font-size: ${(props) => {
      switch (props.size) {
        case 'large':
          return '1rem';
          break;
        case 'middle':
          return '0.875rem';
          break;
        case 'small':
          return '0.8125rem';
          break;
      }
    }};
    background: inherit;
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => (props.isError ? GRAY_20 : WHITE)}
      inset !important;
  }

  input::placeholder {
    color: ${(props) => (props.isError ? GRAY_10 : GRAY_50)};
  }

  input:disabled {
    background-color: ${GRAY_20};
    color: ${GRAY_70};
    cursor: not-allowed;
  }
`;
