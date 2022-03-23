import React, { useEffect, useRef, useState } from 'react';
import * as $ from './styles';
import { ISelect } from './type';

const Select = ({
  id,
  value,
  width = '100%',
  size = 'middle',
  placeholder,
  isError = false,
  options,
  onChange
}: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <$.Wrapper ref={Ref} isOpen={isOpen} isError={isError} width={width} size={size}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {options.filter((option) => option.value === value).length > 0 ? (
          <span>{options.filter((option) => option.value === value)[0].label}</span>
        ) : (
          <$.placeholderSpan>{placeholder}</$.placeholderSpan>
        )}
        {isOpen ? (
          <img src="/icons/arrowUpLight.svg" alt="arrowUp" />
        ) : (
          <img src="/icons/arrowDownLight.svg" alt="arrowDown" />
        )}
      </button>
      {isOpen && (
        <$.OptionsWrapper>
          {options.map((option, index) => (
            <$.OptionContainer
              key={index}
              onClick={() => {
                setIsOpen(false);
                onChange(id, option.value);
              }}
            >
              {option.label}
            </$.OptionContainer>
          ))}
        </$.OptionsWrapper>
      )}
    </$.Wrapper>
  );
};
export default Select;
