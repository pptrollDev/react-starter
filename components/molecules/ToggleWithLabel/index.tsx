import React from 'react';
import { IToggleWithLabel } from './type';
import * as $ from './styles';
import Toggle from '../../atoms/Toggle';

const ToggleWithLabel = ({
  id,
  label,
  value,
  direction = 'vertical',
  onChange
}: IToggleWithLabel) => {
  return (
    <$.Wrapper>
      <$.InputWrapper direction={direction}>
        <$.TitleContainer direction={direction}>{label}</$.TitleContainer>
        <$.InputContainer direction={direction}>
          <Toggle id={id} checked={value} onChange={onChange} />
        </$.InputContainer>
      </$.InputWrapper>
    </$.Wrapper>
  );
};

export default ToggleWithLabel;
