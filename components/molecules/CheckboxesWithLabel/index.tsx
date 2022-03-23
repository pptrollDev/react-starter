import React from 'react';
import * as $ from './styles';
import { ICheckboxesWithLabel } from './type';
import Checkbox from '../../atoms/Checkbox';

const CheckboxesWithLabel = ({
  id,
  label,
  subLabel,
  direction = 'vertical',
  error,
  value,
  options,
  isRequiredMark = false,
  onChange
}: ICheckboxesWithLabel) => {
  const handleChange = (checkboxId: string, checkboxValue: string) => {
    const returnValue = value ? value.concat() : [];

    if (JSON.parse(checkboxValue)) {
      returnValue.push({ value: checkboxId });
      onChange(id, returnValue);
    } else {
      onChange(
        id,
        returnValue.filter((returnCheckbox) => returnCheckbox.value !== checkboxId)
      );
    }
  };

  return (
    <$.Wrapper direction={direction}>
      <$.LabelWrapper direction={direction} isSubLabel={subLabel ? true : false}>
        <$.LabelContainer isSubLabel={subLabel ? true : false}>
          {label}
          {isRequiredMark && <span> *</span>}
        </$.LabelContainer>
        <$.SubLabelContainer>{subLabel}</$.SubLabelContainer>
      </$.LabelWrapper>
      <div>
        <$.CheckboxesWrapper direction={direction}>
          {options.map((option, index) => (
            <$.CheckboxContainer key={index} direction={direction}>
              <Checkbox
                id={`${id}_${option.value}`}
                label={option.label}
                checked={
                  value
                    ? value.filter((checkedValue) => checkedValue.value === option.value)
                        .length > 0
                    : false
                }
                onChange={(checkboxId, checkboxValue) =>
                  handleChange(option.value, checkboxValue)
                }
              />
            </$.CheckboxContainer>
          ))}
        </$.CheckboxesWrapper>
        {error && <$.ErrorContainer direction={direction}>{error}</$.ErrorContainer>}
      </div>
    </$.Wrapper>
  );
};

export default CheckboxesWithLabel;
