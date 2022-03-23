import React from 'react';
import { ITextareaWithLabel } from './type';
import * as $ from './styles';
import Textarea from '../../atoms/Textarea';

const TextareaWithLabel = ({
  id,
  label,
  direction = 'vertical',
  error,
  maxLength,
  disabled,
  isRequiredMark = false,
  placeholder,
  value,
  onChange
}: ITextareaWithLabel) => {
  return (
    <$.Wrapper>
      <$.TextareaWrapper direction={direction}>
        <$.LabelContainer direction={direction}>
          {label}
          {isRequiredMark && <span> *</span>}
        </$.LabelContainer>
        <$.TextareaContainer direction={direction}>
          <Textarea
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            maxLength={maxLength}
            isError={error ? true : false}
            value={value}
            onChange={onChange}
          />
        </$.TextareaContainer>
      </$.TextareaWrapper>
      {error && <$.ErrorContainer>{error}</$.ErrorContainer>}
    </$.Wrapper>
  );
};

export default TextareaWithLabel;
