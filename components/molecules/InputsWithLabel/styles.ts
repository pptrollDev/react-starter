import styled from 'styled-components';
import { BLUE_20, BLUE_60, GRAY_60, RED_60 } from '../../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
`;

export const InputsWrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  display: ${(props) => props.direction === 'horizontal' && 'flex'};
`;

export const LabelContainer = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  flex-shrink: ${(props) => props.direction === 'horizontal' && 0};
  width: ${(props) => props.direction === 'horizontal' && '5.5rem'};
  padding-top: ${(props) => props.direction === 'horizontal' && '0.75rem'};
  color: ${GRAY_60};
  font-weight: bold;
  font-size: 0.8125rem;

  span {
    color: ${RED_60};
  }
`;

export const InputWrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  flex-shrink: ${(props) => props.direction === 'horizontal' && 0};
  width: ${(props) => props.direction === 'horizontal' && 'calc(100% - 5.5rem)'};
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }

  img {
    position: absolute;
    width: 1.125rem;
    top: 0.6875rem;
    right: -1.625rem;
    cursor: pointer;
  }
`;

export const ErrorContainer = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  margin-top: 0.25rem;
  color: ${RED_60};
  font-weight: 500;
  font-size: 0.75rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  button {
    width: 5rem;
    height: 2.5rem;
    background-color: ${BLUE_20};
    color: ${BLUE_60};
    font-size: 0.8125rem;
  }
`;
