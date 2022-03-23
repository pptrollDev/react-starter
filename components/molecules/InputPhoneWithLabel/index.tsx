import React, { useEffect, useState } from 'react';
import { IInputPhoneWithLabel } from './type';
import * as $ from './styles';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';

const InputPhoneWithLabel = ({
  id,
  label,
  direction = 'vertical',
  size = 'middle',
  error,
  isRequiredMark = false,
  value,
  onChange
}: IInputPhoneWithLabel) => {
  const [form, setForm] = useState<{
    phoneFirst: string;
    phoneSecond: string;
    phoneThird: string;
  }>({
    phoneFirst: '010',
    phoneSecond: '',
    phoneThird: ''
  });

  useEffect(() => {
    if (value) {
      const splitString = value.split('-');
      setForm({
        phoneFirst: splitString[0],
        phoneSecond: splitString[1],
        phoneThird: splitString[2]
      });
    } else {
      setForm({
        phoneFirst: '010',
        phoneSecond: '',
        phoneThird: ''
      });
    }
  }, [value]);

  const handleChange = (phoneId: string, phoneValue: string) => {
    const isNumber = !isNaN(parseInt(phoneValue));
    let returnValue = '';

    for (const [formKey, formValue] of Object.entries(form)) {
      if (formKey !== 'phoneFirst') returnValue += '-';

      if (formKey === phoneId) returnValue += phoneValue;
      else returnValue += formValue;
    }

    if (isNumber) {
      onChange(id, returnValue);
    } else {
      if (phoneValue === '') {
        onChange(id, returnValue);
      }
    }
  };

  return (
    <$.Wrapper>
      <$.InputWrapper direction={direction}>
        <$.LabelContainer direction={direction}>
          {label}
          {isRequiredMark && <span> *</span>}
        </$.LabelContainer>
        <$.InputContainer direction={direction}>
          <Select
            id="phoneFirst"
            width="6rem"
            size={size}
            isError={error ? true : false}
            options={[
              { label: '010', value: '010' },
              { label: '011', value: '011' },
              { label: '016', value: '016' },
              { label: '017', value: '017' },
              { label: '018', value: '018' },
              { label: '019', value: '019' }
            ]}
            value={form.phoneFirst}
            onChange={handleChange}
          />
          <$.DashSpan>-</$.DashSpan>
          <Input
            id="phoneSecond"
            maxLength={4}
            size={size}
            placeholder="연락처 앞자리"
            isError={error ? true : false}
            value={form.phoneSecond}
            onChange={handleChange}
          />
          <$.DashSpan>-</$.DashSpan>
          <Input
            id="phoneThird"
            maxLength={4}
            size={size}
            placeholder="연락처 뒷자리"
            isError={error ? true : false}
            value={form.phoneThird}
            onChange={handleChange}
          />
        </$.InputContainer>
      </$.InputWrapper>
      {error && <$.ErrorContainer direction={direction}>{error}</$.ErrorContainer>}
    </$.Wrapper>
  );
};

export default InputPhoneWithLabel;
