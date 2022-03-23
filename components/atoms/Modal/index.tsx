import React from 'react';
import * as $ from './styles';
import { IModal } from './type';

const Modal = ({ isVisible, children }: IModal) => {
  return isVisible ? (
    <$.Wrapper>
      <$.BackgroundWrapper />
      <$.ContentWrapper>
        <$.ContentContainer>{children}</$.ContentContainer>
      </$.ContentWrapper>
    </$.Wrapper>
  ) : null;
};

export default Modal;
