import styled from 'styled-components';
import { BLACK, BLUE_20, BLUE_60 } from '../../../styles/colors';

export const Wrapper = styled.div`
  position: fixed;
  left: 12rem;
  top: 3.375rem;
  width: calc(100% - 12rem);
  height: calc(100% - 3.375rem);
  min-width: 67.5rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: ${BLACK};
  opacity: 0.67;
`;

export const ContentWrapper = styled.div`
  color: white;
  width: 28.125rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 3.375rem;
  }
`;

export const LabelContainer = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const SubLabelContainer = styled.div`
  margin-top: 0.25rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const MessageImageContainer = styled.div`
  margin-top: 0.3125rem;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div<{ status: boolean }>`
  margin-top: ${(props) => (props.status ? '2rem' : '0.25rem')};
  display: flex;
  justify-content: center;

  button {
    width: 9.25rem;
    height: 3rem;
    font-size: 0.875rem;
  }

  #introduction {
    margin-right: 0.25rem;
    background-color: ${BLUE_20};
    color: ${BLUE_60};
  }

  #application {
    margin-left: 0.25rem;
    background-color: ${BLUE_60};
  }
`;
