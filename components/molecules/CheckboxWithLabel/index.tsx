import React from 'react';
import * as $ from './styles';
import { ICheckboxesWithLabel } from './type';
import Checkbox from '../../atoms/Checkbox';

const CheckboxesWithLabel = ({
  id,
  label,
  subLabel,
  direction = 'vertical',
  value,
  options,
  isRequiredMark = false,
  onChange
}: ICheckboxesWithLabel) => {
  return (
    <$.Wrapper direction={direction}>
      <$.LabelWrapper direction={direction} isSubLabel={subLabel ? true : false}>
        <$.LabelContainer isSubLabel={subLabel ? true : false}>
          {label}
          {isRequiredMark && <span> *</span>}
        </$.LabelContainer>
        <$.SubLabelContainer>{subLabel}</$.SubLabelContainer>
      </$.LabelWrapper>
      <$.CheckboxesWrapper direction={direction}>
        {options.map((option, index) => (
          <$.CheckboxContainer key={index} direction={direction}>
            <Checkbox
              id={`${id}_${option.value}`}
              label={option.label}
              checked={option.value === value}
              onChange={(checkboxId, checkboxValue) => onChange(id, checkboxValue)}
            />
          </$.CheckboxContainer>
        ))}
      </$.CheckboxesWrapper>
    </$.Wrapper>
  );
};

export default CheckboxesWithLabel;
