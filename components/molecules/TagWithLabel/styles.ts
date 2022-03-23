import styled from 'styled-components';
import {
  BLUE_20,
  GRAY_100,
  GRAY_40,
  GRAY_50,
  GRAY_60,
  RED_60
} from '../../../styles/colors';

export const Wrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  display: ${(props) => props.direction === 'horizontal' && 'flex'};
  width: 100%;
`;

export const LabelWrapper = styled.div<{
  direction: 'horizontal' | 'vertical';
}>`
  flex-shrink: ${(props) => props.direction === 'horizontal' && 0};
  width: ${(props) => props.direction === 'horizontal' && '5.5rem'};
  padding-top: ${(props) => props.direction === 'horizontal' && '0.75rem'};
  font-weight: bold;
  font-size: 0.8125rem;

  span {
    color: ${RED_60};
  }
`;

export const LabelContainer = styled.div`
  color: ${GRAY_60};
`;

export const InputWrapper = styled.div`
  border-radius: 0.75rem;
  border: 1px solid ${GRAY_40};
  padding: 0 1rem;
  width: 100%;

  button {
    border: none;
    border-radius: 0.5rem;
    margin: 0.375rem 0.375rem 0.375rem 0;
    padding: 0.25rem 0.5rem;
    background-color: ${BLUE_20};
    cursor: pointer;

    label {
      font-size: 13px;
      cursor: pointer;
    }

    img {
      margin-left: 0.5rem;
      width: 0.5rem;
    }
  }

  input {
    border: none;
    outline: none;
    margin: 0.375rem 0;
    padding: 0.25rem 0.5rem;
    width: 50%;
  }

  input::placeholder {
    color: ${GRAY_50};
  }
`;
