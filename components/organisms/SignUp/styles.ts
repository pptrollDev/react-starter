import styled from 'styled-components';
import {
  BLUE_60,
  GRAY_10,
  GRAY_100,
  GRAY_20,
  GRAY_30,
  GRAY_50,
  GRAY_60,
  GRAY_70,
  RED_60
} from '../../../styles/colors';

export const Wrapper = styled.div`
  padding: 0 0 8.875rem 0;
  background-color: ${GRAY_20};
  display: flex;
  justify-content: center;

  .contentWrapper {
    width: 31.5rem;

    .headContainer {
      display: flex;
      justify-content: center;
      padding: 4rem 0 2rem 0;

      img {
        width: 18.0625rem;
        height: 3.8125rem;
      }
    }

    .mainInfoContainer {
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 1.625rem;

      span {
        color: ${BLUE_60};
      }
    }

    .subInfoContainer {
      margin-top: 0.75rem;
      color: ${GRAY_70};
      font-size: 0.75rem;
      font-weight: 500;
    }

    .formWrapper {
      margin-top: 2rem;

      .inputContainer {
        margin-top: 1.5rem;

        &:first-child {
          margin-top: 0;
        }

        .hospitalEmptyWrapper {
          border-radius: 0.75rem;
          margin-top: 0.375rem;
          color: ${GRAY_50};
          font-weight: 500;
          font-size: 0.8125rem;
          display: flex;
          justify-content: center;
          padding: 1.625rem 0;
          background-color: ${GRAY_10};
        }

        .error {
          border: 1px solid ${RED_60};
        }

        .hospitalCreateWrapper {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;
          color: ${GRAY_60};
          font-size: 0.75rem;
          font-weight: 500;

          label {
            margin-left: 0.375rem;
            color: ${GRAY_100};
            text-decoration-line: underline;
            cursor: pointer;
          }
        }
      }
    }

    .submitWrapper {
      border-top: 1px solid ${GRAY_30};
      margin-top: 1.75rem;

      .agreeWrapper {
        margin-top: 1.75rem;

        .essentialWrapper {
          margin-top: 1.125rem;
          display: flex;
          align-items: center;
          font-size: 0.8125rem;

          img {
            margin-right: 0.5rem;
            cursor: pointer;
          }

          label {
            text-decoration-line: underline;
            color: ${GRAY_100};
          }
        }

        .optionalWrapper {
          margin-top: 0.75rem;
          display: flex;
          align-items: center;
          font-size: 0.8125rem;

          img {
            margin-right: 0.5rem;
            cursor: pointer;
          }
        }
      }

      .buttonWrapper {
        margin-top: 1.75rem;

        .errorWrapper {
          margin-bottom: 0.5rem;
          color: ${RED_60};
          font-size: 0.75rem;
          font-weight: 400;
        }

        button {
          background-color: ${BLUE_60};
        }
      }
    }
  }
`;
