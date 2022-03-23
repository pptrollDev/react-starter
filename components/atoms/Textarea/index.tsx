import React from 'react';
import * as $ from './styles';
import { ITextarea } from './type';

const Textarea = ({
  id,
  isError = false,
  disabled = false,
  maxLength,
  placeholder,
  value = '',
  onChange
}: ITextarea) => {
  return (
    <$.Wrapper disabled={disabled} isError={isError}>
      <textarea
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
      />
    </$.Wrapper>
  );
};

export default Textarea;
