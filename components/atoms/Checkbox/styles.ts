import styled from 'styled-components';
import { GRAY_100, GRAY_40 } from '../../../styles/colors';

export const Wrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    display: none;
  }

  span {
    color: ${(props) => (props.disabled ? GRAY_40 : GRAY_100)};
    font-weight: 500;
    font-size: 0.8125rem;

    label {
      cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
      display: flex;
      align-items: center;

      img {
        margin-right: 0.5rem;
        width: 1.125rem;
      }
    }
  }
`;
