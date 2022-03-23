import styled from 'styled-components';
import {
  BLUE_60,
  GRAY_100,
  GRAY_20,
  GRAY_40,
  GRAY_50,
  GRAY_60
} from '../../../styles/colors';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${GRAY_20};
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 31.5rem;

    .headerWrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 3.5rem;

      img {
        width: 18.0625rem;
        height: 3.8125rem;
      }
    }

    .contentWrapper {
      .mainInfoWrapper {
        font-size: 1.125rem;
        font-weight: bold;
        line-height: 1.625rem;

        span {
          color: ${GRAY_100};
        }
      }

      .formWrapper {
        margin-top: 2rem;
        border: 1px solid ${GRAY_40};
        border-radius: 1rem;
        padding: 1.5rem 2rem 1.5rem 1.5rem;

        .titleContainer {
          color: ${GRAY_100};
          font-size: 1rem;
          font-weight: bold;
        }

        .contentContainer {
          margin-top: 1rem;
          display: flex;
          font-size: 0.8125rem;

          .labelContainer {
            color: ${GRAY_60};
            font-weight: bold;
            width: 5rem;
            flex-shrink: 0;
          }

          .valueContainer {
            color: ${GRAY_100};
            font-weight: 500;

            .addressContainer {
              margin-top: 0.25rem;
              font-size: 0.75rem;
            }

            .moreInfoContainer {
              margin-top: 0.25rem;
              font-size: 0.75rem;
            }
          }
        }
      }

      .subInfoWrapper {
        margin-top: 0.5rem;
        color: ${GRAY_50};
        font-weight: 500;
        font-size: 0.75rem;
      }

      .submitWrapper {
        margin-top: 3rem;

        button {
          background-color: ${BLUE_60};
          font-size: 1rem;
        }
      }
    }
  }
`;

export const SubmitContainer = styled.div``;
