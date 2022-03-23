import React, { useEffect, useRef, useState } from 'react';
import { IInputHospitalWithLabel } from './type';
import * as $ from './styles';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import dayjs from 'dayjs';

const InputHospitalWithLabel = ({
  id,
  label,
  value,
  placeholder,
  options,
  isRequiredMark = false,
  onClick,
  onChange
}: IInputHospitalWithLabel) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const Ref: any = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (Ref.current && !Ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [Ref]);

  const handleChange = (id: string, value: string) => {
    setInput(value);
  };

  return (
    <$.Wrapper ref={Ref}>
      <$.LabelContainer>
        {label}
        {isRequiredMark && <span> *</span>}
      </$.LabelContainer>
      <$.SelectWrapper>
        <Input
          id="hospitalInput"
          placeholder={placeholder}
          src={{
            default: '/icons/search.svg',
            focus: '/icons/search.svg'
          }}
          imageDirection="right"
          value={input}
          onSubmit={() => {
            onClick(id, input);
            setIsOpen(true);
          }}
          onChange={handleChange}
        />
        {isOpen && (
          <$.OptionsWrapper>
            {options.map((option, index) => (
              <$.OptionContainer
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  onChange(id, option);
                }}
              >
                <div>
                  <$.OptionNameLabel>{option.name}</$.OptionNameLabel>
                </div>
                <div>
                  <$.OptionAddressLabel>{option.address}</$.OptionAddressLabel>
                </div>
              </$.OptionContainer>
            ))}
          </$.OptionsWrapper>
        )}
      </$.SelectWrapper>
      {value && (
        <$.SelectedWrapper>
          <$.SelectedContentWrapper>
            <$.NameContainer>{value.name}</$.NameContainer>
            <$.AddressContainer>{value.address}</$.AddressContainer>
            {!value.id && (
              <$.MoreInfoContainer>
                <label>{value.phone}</label>
                <label>|</label>
                <label>
                  {value.operatedStatus === 'operated' ? '영업중' : '개원예정'}
                </label>
                <label>
                  {value.toBeOperatedAt &&
                    dayjs(value.toBeOperatedAt).format('YYYY.MM.DD')}
                </label>
              </$.MoreInfoContainer>
            )}
          </$.SelectedContentWrapper>
          {!value.id && (
            <$.SelectedButtonWrapper>
              <Button id="update" label="수정" onClick={() => onClick(`${id}Update`)} />
            </$.SelectedButtonWrapper>
          )}
        </$.SelectedWrapper>
      )}
    </$.Wrapper>
  );
};

export default InputHospitalWithLabel;
