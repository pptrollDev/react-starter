import styled from 'styled-components';
import { GRAY_80, WHITE } from '../../../styles/colors';

export const Button = styled.button`
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${GRAY_80};
  color: ${WHITE};
  width: 100%;
  height: 3.375rem;
  line-height: 3.375rem;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.1;
    cursor: not-allowed;

    label {
      cursor: not-allowed;
    }
  }
`;

export const LeftImg = styled.img`
  margin-right: 0.375rem;
`;

export const RightImg = styled.img`
  margin-left: 0.375rem;
`;

export const Label = styled.label`
  cursor: pointer;
`;
