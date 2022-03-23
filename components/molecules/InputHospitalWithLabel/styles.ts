import styled from 'styled-components';
import {
  BLUE_20,
  BLUE_60,
  GRAY_10,
  GRAY_100,
  GRAY_30,
  GRAY_60,
  RED_60,
  WHITE
} from '../../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
`;

export const LabelContainer = styled.div`
  flex-shrink: 0;
  width: 5.5rem;
  color: ${GRAY_60};
  font-weight: bold;
  font-size: 0.8125rem;

  span {
    color: ${RED_60};
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 0.375rem;
  width: 100%;
  position: relative;
`;

export const OptionsWrapper = styled.div`
  margin-top: 0.5rem;
  position: absolute;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgba(17, 23, 35, 0.15);
  z-index: 1;
  background-color: ${WHITE};
  width: 100%;
  max-height: 12.5625rem;
  overflow: scroll;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  border-bottom: 1px solid ${GRAY_30};
  padding: 0.75rem 1rem;
  font-weight: 500;
`;

export const OptionNameLabel = styled.label`
  font-size: 0.8125rem;
  color: ${GRAY_100};
`;

export const OptionAddressLabel = styled.label`
  font-size: 0.75rem;
  color: ${GRAY_60};
`;

export const SelectedWrapper = styled.div`
  border-radius: 0.75rem;
  margin-top: 0.365rem;
  padding: 1rem;
  background-color: ${GRAY_10};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameContainer = styled.div`
  color: ${GRAY_100};
  font-weight: bold;
  font-size: 0.875rem;
`;

export const AddressContainer = styled.div`
  margin-top: 0.25rem;
  color: ${GRAY_100};
  font-weight: 500;
  font-size: 0.75rem;
`;

export const MoreInfoContainer = styled.div`
  margin-top: 0.5rem;
  color: ${GRAY_60};
  font-weight: 500;
  font-size: 0.75rem;

  label {
    margin-right: 0.25rem;
  }
`;

export const SelectedContentWrapper = styled.div`
  width: 100%;
`;

export const SelectedButtonWrapper = styled.div`
  button {
    border-radius: 0.75rem;
    width: 3.5rem;
    height: 2rem;
    font-size: 0.8125rem;
    background-color: ${BLUE_20};
    color: ${BLUE_60};
  }
`;
