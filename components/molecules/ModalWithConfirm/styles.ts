import styled from 'styled-components';
import { BLUE_60, GRAY_100, GRAY_30, GRAY_60 } from '../../../styles/colors';

export const Wrapper = styled.div`
  padding: 3.5rem 1rem 1rem 1rem;
  width: 19rem;
`;

export const TitleContainer = styled.div`
  text-align: center;
  color: ${GRAY_100};
  font-weight: bold;
  font-size: 1.125rem;
`;

export const ContentContainer = styled.div`
  margin-top: 0.25rem;
  text-align: center;
  color: ${GRAY_60};
  font-weight: 500;
  font-size: 0.875rem;
  white-space: pre-line;
`;

export const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;

  button {
    height: 3rem;
    font-size: 0.875rem;
  }

  #modalCancel {
    margin-right: 0.5rem;
    background-color: ${GRAY_30};
    color: ${GRAY_60};
  }

  #modalConfirm {
    background-color: ${BLUE_60};
  }
`;
