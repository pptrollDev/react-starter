import styled from 'styled-components';
import { GRAY_60, RED_60 } from '../../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
`;

export const InputWrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  display: ${(props) => props.direction === 'horizontal' && 'flex'};
  align-items: ${(props) => props.direction === 'horizontal' && 'center'};
`;

export const TitleContainer = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  flex-shrink: ${(props) => props.direction === 'horizontal' && 0};
  width: ${(props) => props.direction === 'horizontal' && '5.5rem'};
  color: ${GRAY_60};
  font-weight: bold;
  font-size: 0.8125rem;
`;

export const InputContainer = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  flex-shrink: ${(props) => props.direction === 'horizontal' && 0};
  width: ${(props) => props.direction === 'horizontal' && 'calc(100% - 5.5rem)'};
  margin-top: ${(props) => props.direction === 'vertical' && '0.375rem'};
`;

export const ErrorContainer = styled.div`
  margin-top: 0.25rem;
  color: ${RED_60};
  font-weight: 500;
  font-size: 0.75rem;
`;
