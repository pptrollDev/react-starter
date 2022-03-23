import styled from 'styled-components';
import {
  BLUE_60,
  GRAY_100,
  GRAY_30,
  GRAY_70,
  RED_60,
  WHITE
} from '../../../styles/colors';

export const Wrapper = styled.div`
  width: 31.5rem;

  .headerWrapper {
    padding: 1.5rem;
    font-weight: 700;
    font-size: 1rem;
    color: ${GRAY_100};

    .imgContainer {
      display: flex;
      justify-content: flex-end;

      img {
        cursor: pointer;
      }
    }
  }

  .contentWrapper {
    padding: 0 1.5rem 3rem 1.5rem;

    .inputContainer {
      margin-top: 1rem;

      &:first-child {
        margin-top: 0;
      }
    }

    .typeWrapper {
      display: flex;
      align-items: center;

      .dateContainer {
        width: 10.25rem;
      }
    }
  }

  .footerWrapper {
    border-radius: 0 0 1rem 1rem;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    background-color: ${BLUE_60};
    color: ${WHITE};
    cursor: pointer;
  }
`;
