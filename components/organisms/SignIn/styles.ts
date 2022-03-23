import styled from 'styled-components';
import { BLUE_60, GRAY_30, GRAY_70, RED_60 } from '../../../styles/colors';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .cardWrapper {
    width: 28rem;

    .headerWrapper {
      display: flex;
      justify-content: center;

      img {
        width: 19.1875rem;
      }
    }

    .contentWrapper {
      margin-top: 4.0625rem;

      .inputContainer {
        margin-top: 0.875rem;

        &:first-child {
          margin-top: 0;
        }
      }

      .buttonWrapper {
        margin-top: 1.5rem;
        display: flex;
        font-size: 0.875rem;

        .checkboxContainer {
          flex-shrink: 0;

          label {
            color: ${GRAY_70};
          }
        }

        .buttonContainer {
          width: 100%;
          display: flex;
          justify-content: end;

          span {
            cursor: pointer;
            font-weight: 500;
            color: ${GRAY_70};
            font-size: 0.8125rem;
          }

          .findButton {
            border-right: 1px solid ${GRAY_30};
            padding: 0 0.75rem 0 0;
          }

          .signupButton {
            padding: 0 0 0 0.75rem;
          }
        }
      }

      .submitWrapper {
        margin-top: 3rem;

        .errorContainer {
          margin-bottom: 0.5rem;
          color: ${RED_60};
          font-size: 0.75rem;
          font-weight: 500;
        }

        button {
          background-color: ${BLUE_60};
        }
      }
    }
  }
`;
