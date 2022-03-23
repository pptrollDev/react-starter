import styled from 'styled-components';
import {
  GRAY_100,
  GRAY_20,
  GRAY_40,
  GRAY_50,
  GRAY_10,
  RED_60,
  WHITE,
  GRAY_70
} from '../../../styles/colors';

export const Wrapper = styled.div<{
  disabled: boolean;
  isError: boolean;
  size: 'large' | 'middle' | 'small';
}>`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  width: calc(100% - 2rem);
  height: ${(props) => {
    switch (props.size) {
      case 'large':
        return '3.125rem';
        break;
      case 'middle':
        return '2.625rem';
        break;
      case 'small':
        return '2.25rem';
        break;
    }
  }};
  outline: none;
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
  border: 1px solid
    ${(props) => (props.disabled ? GRAY_20 : props.isError ? RED_60 : GRAY_40)};
  background-color: ${(props) =>
    props.disabled ? GRAY_20 : props.isError ? GRAY_10 : WHITE};

  &:focus-within {
    border: 1px solid ${GRAY_100};

    .defaultImg {
      display: none;
    }

    .focusImg {
      display: inline;
    }
  }

  img {
    margin-right: 0.375rem;
    width: 1.125rem;
    height: 1.125rem;
    display: none;
  }

  .defaultImg {
    display: inline;
  }

  .focusImg {
    display: none;
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
  }
  font-weight: 500;

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
  }
`;
