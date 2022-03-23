import React from 'react';
import * as $ from './styles';
import { IButton } from './type';

const Button = ({
  id,
  label,
  disabled = false,
  src,
  imageDirection = 'left',
  onClick
}: IButton) => {
  return (
    <$.Button
      id={id}
      type="button"
      disabled={disabled}
      onClick={(e) => onClick && onClick(id)}
    >
      {src && imageDirection === 'left' && <$.LeftImg src={src} alt="button" />}
      <$.Label>{label}</$.Label>
      {src && imageDirection === 'right' && <$.RightImg src={src} alt="button" />}
    </$.Button>
  );
};
export default Button;
