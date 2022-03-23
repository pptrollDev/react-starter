import React from 'react';
import { ISelectWithLabel } from './type';
import * as $ from './styles';
import Select from '../../atoms/Select';

const SelectWithLabel = ({
  id,
  label,
  size = 'middle',
  direction = 'vertical',
  error,
  value,
  placeholder,
  options,
  isRequiredMark = false,
  onChange
}: ISelectWithLabel) => {
  return (
    <$.Wrapper>
      <$.SelectWrapper direction={direction}>
        <$.LabelContainer direction={direction}>
          {label}
          {isRequiredMark && <span> *</span>}
        </$.LabelContainer>
        <$.SelectContainer direction={direction}>
          <Select
            id={id}
            value={value}
            size={size}
            isError={error ? true : false}
            placeholder={placeholder}
            options={options}
            onChange={onChange}
          />
        </$.SelectContainer>
      </$.SelectWrapper>
      {error && <$.ErrorContainer direction={direction}>{error}</$.ErrorContainer>}
    </$.Wrapper>
  );
};

export default SelectWithLabel;
