import React from 'react';
import * as $ from './styles';
import { IRadiosWithLabel } from './type';
import Radio from '../../atoms/Radio';

const RadiosWithLabel = ({
  id,
  label,
  subLabel,
  direction = 'vertical',
  disabled = false,
  error,
  value,
  options,
  isRequiredMark = false,
  onChange
}: IRadiosWithLabel) => {
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
        <$.RadiosWrapper direction={direction}>
          {options.map((option, index) => (
            <$.RadioContainer key={index} direction={direction}>
              <Radio
                id={`${id}_${option.value}`}
                label={option.label}
                checked={option.value === value}
                disabled={disabled}
                value={option.value}
                onChange={(radioId, radioValue) => onChange(id, radioValue)}
              />
            </$.RadioContainer>
          ))}
        </$.RadiosWrapper>
        {error && <$.ErrorContainer direction={direction}>{error}</$.ErrorContainer>}
      </div>
    </$.Wrapper>
  );
};

export default RadiosWithLabel;
