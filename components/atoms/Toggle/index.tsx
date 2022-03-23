import React from 'react';
import * as $ from './styles';
import { IToggle } from './type';

const Toggle = ({ id, checked, onChange }: IToggle) => {
  return (
    <$.Wrapper>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked.toString())}
      />
      <span className="slider" />
    </$.Wrapper>
  );
};

export default Toggle;
