import styled from 'styled-components';
import {
  GRAY_100,
  GRAY_20,
  GRAY_40,
  GRAY_50,
  GRAY_10,
  RED_60,
  WHITE
} from '../../../styles/colors';

export const Wrapper = styled.div<{
  disabled: boolean;
  isError: boolean;
}>`
  display: flex;
  align-items: center;
  outline: none;
  border-radius: 0.75rem;
  padding: 0.625rem 1rem;
  border: 1px solid
    ${(props) => (props.disabled ? GRAY_20 : props.isError ? RED_60 : GRAY_40)};
  background: ${(props) => (props.disabled ? GRAY_20 : props.isError ? GRAY_10 : WHITE)};

  &:focus-within {
    border: 1px solid ${GRAY_100};
  }

  textarea {
    font-family: inherit;
    outline: none;
    border: none;
    width: 100%;
    height: 2.5rem;
    resize: none;
    font-size: 0.8125rem;
    color: ${GRAY_100};
    font-weight: 400;

    &::placeholder {
      color: ${GRAY_50};
    }
  }
`;
