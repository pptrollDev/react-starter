import styled from 'styled-components';
import { GRAY_20, GRAY_50, GRAY_60, GRAY_70, RED_60 } from '../../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
`;

export const PostCodeModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostCodeWrapper = styled.div`
  width: 31.5rem;
`;

export const closeContainer = styled.div`
  padding: 1rem 1rem 0 1rem;
  display: flex;
  justify-content: flex-end;

  img {
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  display: ${(props) => props.direction === 'horizontal' && 'flex'};
  align-items: ${(props) => props.direction === 'horizontal' && 'center'};
`;

export const LabelContainer = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  flex-shrink: ${(props) => props.direction === 'horizontal' && 0};
  width: ${(props) => props.direction === 'horizontal' && '5.5rem'};
  color: ${GRAY_60};
  font-weight: bold;
  font-size: 0.8125rem;

  span {
    color: ${RED_60};
  }
`;

export const InputContainer = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  flex-shrink: ${(props) => props.direction === 'horizontal' && 0};
  width: ${(props) => props.direction === 'horizontal' && 'calc(100% - 5.5rem)'};
  margin-top: ${(props) => props.direction === 'vertical' && '0.375rem'};
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-right: 0.375rem;
  flex-shrink: 0;

  button {
    border-radius: 0.75rem;
    height: 2.5rem;
    font-size: 13px;
    font-weight: 700;
    background-color: ${GRAY_70};
  }
`;

export const TextWrapper = styled.div`
  border-radius: 0.75rem;
  padding: 0 1rem;
  width: 100%;
  height: 2.5rem;
  background-color: ${GRAY_20};
  display: flex;
  align-items: center;
  color: ${GRAY_70};
  font-size: 0.8125rem;
  font-weight: 500;
`;

export const ErrorContainer = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  margin-top: 0.25rem;
  padding-left: ${(props) => props.direction === 'horizontal' && '5.5rem'};
  color: ${RED_60};
  font-weight: 500;
  font-size: 0.75rem;
`;
