import React from 'react';
import { IInputWithLabel } from './type';
import * as $ from './styles';
import Input from '../../atoms/Input';
import Tooltip from '../../atoms/Tooltip';

const InputWithLabel = ({
  id,
  label,
  tooltipLabel,
  type,
  size = 'middle',
  direction = 'vertical',
  error,
  maxLength,
  disabled,
  isRequiredMark = false,
  placeholder,
  value,
  onChange
}: IInputWithLabel) => {
  return (
    <$.Wrapper>
      <$.InputWrapper direction={direction}>
        <$.LabelContainer direction={direction}>
          {label}
          {isRequiredMark && <span>&nbsp;*</span>}
          {tooltipLabel && <Tooltip label={tooltipLabel} />}
        </$.LabelContainer>
        <$.InputContainer direction={direction}>
          <Input
            id={id}
            type={type}
            disabled={disabled}
            size={size}
            maxLength={maxLength}
            isError={error ? true : false}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </$.InputContainer>
      </$.InputWrapper>
      {error && <$.ErrorContainer direction={direction}>{error}</$.ErrorContainer>}
    </$.Wrapper>
  );
};

export default InputWithLabel;
