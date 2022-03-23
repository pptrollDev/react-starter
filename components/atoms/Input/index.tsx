import React from 'react';
import * as $ from './styles';
import { IInput } from './type';

const Input = ({
  id,
  type = 'text',
  isError = false,
  src,
  imageDirection = 'left',
  size = 'middle',
  disabled = false,
  maxLength,
  placeholder,
  value = '',
  onSubmit,
  onChange
}: IInput) => {
  return (
    <$.Wrapper disabled={disabled} isError={isError} size={size}>
      {src && imageDirection === 'left' && (
        <>
          <img className="defaultImg" src={src.default} alt={`${id}Default`} />
          <img className="focusImg" src={src.focus} alt={`${id}Focus`} />
        </>
      )}
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="new-password"
        disabled={disabled}
        maxLength={maxLength}
        value={value}
        onKeyDown={(e) => {
          if (e.code === 'Enter' && onSubmit) onSubmit('submit');
        }}
        onChange={(e) => onChange(id, e.target.value)}
      />
      {src && imageDirection === 'right' && (
        <>
          <img className="defaultImg" src={src.default} alt={`${id}Default`} />
          <img className="focusImg" src={src.focus} alt={`${id}Focus`} />
        </>
      )}
    </$.Wrapper>
  );
};

export default Input;
