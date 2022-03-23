import React, { forwardRef } from 'react';
import * as $ from './styles';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';
import { IInputDate } from './type';
import 'react-datepicker/dist/react-datepicker.css';

const InputDate = ({
  id,
  size = 'middle',
  isError = false,
  disabled = false,
  placeholder,
  value,
  onChange
}: IInputDate) => {
  const CustomInput = forwardRef(({ onClick }: any, ref: any) => (
    <$.InputWrapper disabled={disabled} isError={isError} size={size}>
      <input
        onClick={onClick}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        value={value && dayjs(value).format('YYYY.MM.DD')}
        readOnly
      />
    </$.InputWrapper>
  ));
  CustomInput.displayName = 'CustomInput';

  return (
    <$.Wrapper>
      <DatePicker
        selected={value}
        onChange={(dateValue: Date) => onChange(id, dateValue)}
        customInput={<CustomInput />}
      />
    </$.Wrapper>
  );
};
export default InputDate;
