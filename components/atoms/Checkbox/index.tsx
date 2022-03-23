import React from 'react';
import * as $ from './styles';
import { ICheckbox } from './type';

const Checkbox = ({ id, label, checked, disabled = false, onChange }: ICheckbox) => {
  return (
    <$.Wrapper disabled={disabled}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(id, e.target.checked.toString())}
      />
      <span>
        <label htmlFor={id}>
          <img
            src={checked ? '/icons/checkboxChecked.svg' : '/icons/checkbox.svg'}
            alt="checkbox"
          />
          {label}
        </label>
      </span>
    </$.Wrapper>
  );
};
export default Checkbox;
