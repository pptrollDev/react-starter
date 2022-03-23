import React from 'react';
import * as $ from './styles';
import { IRadio } from './type';

const Radio = ({ id, label, checked, disabled = false, value, onChange }: IRadio) => {
  return (
    <$.Wrapper checked={checked} disabled={disabled}>
      <input
        id={id}
        type="radio"
        checked={checked}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
      />
      <span>
        <label htmlFor={id}>
          <img
            src={checked ? '/icons/radioChecked.svg' : '/icons/radio.svg'}
            alt="radio"
          />
          {label}
        </label>
      </span>
    </$.Wrapper>
  );
};
export default Radio;
