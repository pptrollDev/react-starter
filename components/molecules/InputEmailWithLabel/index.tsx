import React, { useEffect, useState } from 'react';
import { IInputEmailWithLabel } from './type';
import * as $ from './styles';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';

const InputEmailWithLabel = ({
  id,
  label,
  direction = 'vertical',
  error,
  isRequiredMark = false,
  value,
  onChange
}: IInputEmailWithLabel) => {
  const [form, setForm] = useState<{
    emailFirst: string;
    emailSecond: string;
  }>({
    emailFirst: '',
    emailSecond: 'gmail.com'
  });

  useEffect(() => {
    if (value) {
      const splitString = value.split('@');
      setForm({
        emailFirst: splitString[0],
        emailSecond: splitString[1]
      });
    }
  }, [value]);

  const handleChange = (emailId: string, emailValue: string) => {
    if (emailId === 'emailFirst') onChange(id, `${emailValue}@${form.emailSecond}`);
    else onChange(id, `${form.emailFirst}@${emailValue}`);
  };

  return (
    <$.Wrapper>
      <$.InputWrapper direction={direction}>
        <$.LabelContainer direction={direction}>
          {label}
          {isRequiredMark && <span> *</span>}
        </$.LabelContainer>
        <$.InputContainer direction={direction}>
          <Input
            id="emailFirst"
            placeholder="이메일 앞자리"
            isError={error ? true : false}
            value={form.emailFirst}
            onChange={handleChange}
          />
          <$.AsperandSpan>@</$.AsperandSpan>
          <Select
            id="emailSecond"
            isError={error ? true : false}
            options={[
              { label: 'naver.com', value: 'naver.com' },
              { label: 'hanmail.net', value: 'hanmail.net' },
              { label: 'daum.net', value: 'daum.net' },
              { label: 'gmail.com', value: 'gmail.com' },
              { label: 'nate.com', value: 'nate.com' },
              { label: 'hotmail.com', value: 'hotmail.com' },
              { label: 'outlook.com', value: 'outlook.com' },
              { label: 'icloud.com', value: 'icloud.com' }
            ]}
            value={form.emailSecond}
            onChange={handleChange}
          />
        </$.InputContainer>
      </$.InputWrapper>
      {error && <$.ErrorContainer direction={direction}>{error}</$.ErrorContainer>}
    </$.Wrapper>
  );
};

export default InputEmailWithLabel;
