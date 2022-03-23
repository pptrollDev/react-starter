import styled from 'styled-components';
import {
  GRAY_10,
  GRAY_100,
  GRAY_30,
  GRAY_40,
  GRAY_50,
  GRAY_80,
  RED_60,
  WHITE
} from '../../../styles/colors';

export const Wrapper = styled.div<{
  isOpen: boolean;
  isError: boolean;
  width: string;
  size: 'large' | 'middle' | 'small';
}>`
  position: relative;
  border-radius: ${(props) => {
    switch (props.size) {
      case 'large':
        return '1rem';
        break;
      case 'middle':
        return '0.75rem';
        break;
      case 'small':
        return '0.75rem';
        break;
    }
  }};
  border: 1px solid
    ${(props) => (props.isError ? RED_60 : props.isOpen ? GRAY_100 : GRAY_40)};
  width: ${(props) => props.width};

  button {
    border-radius: ${(props) => {
      switch (props.size) {
        case 'large':
          return '1rem';
          break;
        case 'middle':
          return '0.75rem';
          break;
        case 'small':
          return '0.75rem';
          break;
      }
    }};
    padding: 0 1rem;
    width: 100%;
    height: ${(props) => {
      switch (props.size) {
        case 'large':
          return '3.125rem';
          break;
        case 'middle':
          return '2.625rem';
          break;
        case 'small':
          return '2.25rem';
          break;
      }
    }};
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${(props) => (props.isError ? GRAY_10 : 'transparent')};
    color: ${GRAY_80};

    span {
      margin-right: 0.625rem;
      font-size: ${(props) => {
        switch (props.size) {
          case 'large':
            return '1rem';
            break;
          case 'middle':
            return '0.875rem';
            break;
          case 'small':
            return '0.8125rem';
            break;
        }
      }};
    }

    img {
      width: 1.25rem;
    }
  }
`;

export const placeholderSpan = styled.span`
  color: ${GRAY_50};
`;

export const OptionsWrapper = styled.div`
  margin-top: 0.5rem;
  position: absolute;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgba(17, 23, 35, 0.15);
  z-index: 1;
  background-color: ${WHITE};
  width: 100%;
  max-height: 9.25rem;
  overflow: scroll;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  border-bottom: 1px solid ${GRAY_30};
  padding: 0.625rem 1rem;
  color: ${GRAY_100};
  font-weight: 500;
  font-size: 0.8125rem;
`;
