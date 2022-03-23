import React from 'react';
import * as $ from './styles';
import { IModalWithConfirm } from './type';
import Modal from '../../atoms/Modal';
import Button from '../../atoms/Button';

const ModalWithConfirm = ({
  id,
  titleLabel,
  contentLabel,
  cancelButtonLabel,
  confirmButtonLabel = '확인',
  isVisible,
  onClick
}: IModalWithConfirm) => {
  return (
    <Modal isVisible={isVisible}>
      <$.Wrapper>
        <$.TitleContainer>{titleLabel}</$.TitleContainer>
        {contentLabel && <$.ContentContainer>{contentLabel}</$.ContentContainer>}
        <$.ButtonContainer>
          {cancelButtonLabel && (
            <Button id="modalCancel" label={cancelButtonLabel} onClick={onClick} />
          )}
          <Button
            id="modalConfirm"
            label={confirmButtonLabel}
            onClick={() => onClick && onClick(`${id}ModalConfirm`)}
          />
        </$.ButtonContainer>
      </$.Wrapper>
    </Modal>
  );
};

export default ModalWithConfirm;
