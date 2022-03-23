import React from 'react';
import * as $ from './styles';
import { ITagWithLabel } from './type';

const TagWithLabel = ({
  id,
  label,
  direction = 'vertical',
  value,
  placeholder,
  isRequiredMark = false,
  onChange
}: ITagWithLabel) => {
  const handleClick = (buttonValue: string) => {
    if (value) {
      const returnValue = value.concat();
      const filterValue = returnValue?.filter((value) => value.value !== buttonValue);

      onChange(id, filterValue);
    }
  };

  const handleKeyPress = (e: any) => {
    if ((e.key === 'Enter' || e.keyCode === 13) && e.target.value !== '') {
      const returnValue = value ? value.concat() : [];
      const filterValue = returnValue.filter(
        (returnTag) => returnTag.value !== e.target.value
      );

      if (returnValue.length === filterValue.length) {
        returnValue.push({ value: e.target.value });
        onChange(id, returnValue);
      } else {
        onChange(id, filterValue);
      }

      e.target.value = '';
    }
  };

  return (
    <$.Wrapper direction={direction}>
      <$.LabelWrapper direction={direction}>
        <$.LabelContainer>
          {label}
          {isRequiredMark && <span> *</span>}
        </$.LabelContainer>
      </$.LabelWrapper>
      <$.InputWrapper>
        {value?.map((tag, index) => (
          <button key={index} onClick={() => handleClick(tag.value)}>
            <label>{tag.value}</label>
            <img src="/icons/close.svg" alt="close" />
          </button>
        ))}
        <input
          type="text"
          name={id}
          id={id}
          maxLength={20}
          placeholder={placeholder}
          onKeyPress={handleKeyPress}
        />
      </$.InputWrapper>
    </$.Wrapper>
  );
};

export default TagWithLabel;
