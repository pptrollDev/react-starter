import React from 'react';
import { IInputsWithLabel } from './type';
import * as $ from './styles';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const InputsWithLabel = ({
  id,
  label,
  type,
  size = 'middle',
  direction = 'vertical',
  errors,
  maxLength,
  disabled,
  isRequiredMark = false,
  placeholder,
  value,
  setError,
  onChange
}: IInputsWithLabel) => {
  const handleClick = (inputId: string, inputValue?: string) => {
    let tempValue: string[] = value.concat();

    if (inputId === 'delete' && inputValue) {
      const startIndex = parseInt(inputValue);
      tempValue.splice(startIndex, 1);
      if (errors) {
        const tempErrors: string[] = errors.concat();
        tempErrors.splice(startIndex, 1);
        setError(id, tempErrors);
      }
    } else {
      tempValue = tempValue.concat(['']);
    }
    onChange(id, tempValue);
  };

  const handleChange = (inputId: string, inputValue: string) => {
    const tempValue: string[] = value.concat();
    tempValue[parseInt(inputId)] = inputValue;
    onChange(id, tempValue);
  };

  return (
    <$.Wrapper>
      <$.InputsWrapper direction={direction}>
        <$.LabelContainer direction={direction}>
          {label}
          {isRequiredMark && <span> *</span>}
        </$.LabelContainer>
        <$.InputWrapper direction={direction}>
          {value.map((inputValue, index) => (
            <React.Fragment key={index}>
              <$.InputContainer>
                <Input
                  id={`${id}_${index}`}
                  type={type}
                  disabled={disabled}
                  size={size}
                  maxLength={maxLength}
                  isError={errors && errors[index] ? true : false}
                  placeholder={placeholder}
                  value={inputValue}
                  onChange={(inputId, inputValue) =>
                    handleChange(index.toString(), inputValue)
                  }
                />
                {index !== 0 && (
                  <img
                    src="/icons/listDelete.svg"
                    alt="listDelete"
                    onClick={() => handleClick('delete', index.toString())}
                  />
                )}
              </$.InputContainer>
              {errors && errors[index] && (
                <$.ErrorContainer direction={direction}>{errors[index]}</$.ErrorContainer>
              )}
            </React.Fragment>
          ))}
          <$.ButtonContainer>
            <Button id="create" label="항목추가" onClick={handleClick} />
          </$.ButtonContainer>
        </$.InputWrapper>
      </$.InputsWrapper>
    </$.Wrapper>
  );
};

export default InputsWithLabel;
