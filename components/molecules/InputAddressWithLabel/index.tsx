import React, { useState } from 'react';
import { IInputAddressWithLabel } from './type';
import * as $ from './styles';
import Button from '../../atoms/Button';
import DaumPostcode from 'react-daum-postcode';

const InputAddressWithLabel = ({
  id,
  label,
  direction = 'vertical',
  error,
  isRequiredMark = false,
  value,
  onChange
}: IInputAddressWithLabel) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    setIsOpen(true);
    switch (id) {
      case 'openSearchAddress':
        setIsOpen(true);
        break;
      case 'closeSearchAddress':
        setIsOpen(false);
        break;
    }
  };

  const handleComplete = (data: any) => {
    setIsOpen(false);
    onChange(id, data.address);
  };

  return (
    <>
      {isOpen && (
        <$.PostCodeModal>
          <$.PostCodeWrapper>
            <DaumPostcode style={{ height: '31rem' }} onComplete={handleComplete} />
          </$.PostCodeWrapper>
        </$.PostCodeModal>
      )}
      <$.Wrapper>
        <$.InputWrapper direction={direction}>
          <$.LabelContainer direction={direction}>
            {label}
            {isRequiredMark && <span> *</span>}
          </$.LabelContainer>
          <$.InputContainer direction={direction}>
            <$.ButtonWrapper>
              <Button id="openSearchAddress" label="주소검색" onClick={handleClick} />
            </$.ButtonWrapper>
            <$.TextWrapper>{value}</$.TextWrapper>
          </$.InputContainer>
        </$.InputWrapper>
        {error && <$.ErrorContainer direction={direction}>{error}</$.ErrorContainer>}
      </$.Wrapper>
    </>
  );
};

export default InputAddressWithLabel;
