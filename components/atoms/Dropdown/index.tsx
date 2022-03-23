import React, { useEffect, useRef, useState } from 'react';
import * as $ from './styles';
import { IDropdown } from './type';

const Dropdown = ({ label, options, onClick }: IDropdown) => {
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
    <$.Wrapper ref={Ref}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{label}</span>
        {isOpen ? (
          <img src="/icons/arrowUp.svg" alt="arrowUp" />
        ) : (
          <img src="/icons/arrowDown.svg" alt="arrowDown" />
        )}
      </button>
      {isOpen && (
        <$.OptionsWrapper>
          {options.map((option, index) => (
            <$.OptionContainer
              key={index}
              onClick={() => {
                setIsOpen(false);
                onClick(option.value);
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
export default Dropdown;
