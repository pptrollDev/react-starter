import styled from 'styled-components';
import { GRAY_100, GRAY_60, GRAY_70 } from '../../../styles/colors';

export const Wrapper = styled.div``;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${GRAY_60};
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1.25rem;
  }

  span:last-child {
    color: ${GRAY_70};
    font-size: 0.8125rem;
    font-weight: bold;
  }

  img {
    width: 1rem;
  }
`;

export const TitleContainer = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.125rem;
  color: ${GRAY_100};
`;

export const SubTitleContainer = styled.div`
  margin-top: 0.375rem;
  font-weight: 500;
  font-size: 0.8125rem;
  color: ${GRAY_70};
`;

export const TitleImg = styled.img`
  width: 1rem;
  margin-right: 0.25rem;
`;
