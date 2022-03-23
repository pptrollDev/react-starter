import React from 'react';
import * as $ from './styles';
import Modal from '../../atoms/Modal';
import InputWithLabel from '../../molecules/InputWithLabel';
import InputAddressWithLabel from '../../molecules/InputAddressWithLabel';
import { IModalAddressInput, IModalAddressInputError } from './type';

const ModalAddressInput = ({
  form,
  setForm,
  error,
  setError,
  modalAddress,
  setModalAddress
}: IModalAddressInput) => {
  const handleClick = (id: string) => {
    switch (id) {
      case 'submit':
        let tempError: IModalAddressInputError = {};

        for (const [key, value] of Object.entries(form)) {
          let errorMessage = undefined;
          switch (key) {
            case 'address':
              if (value === '') {
                errorMessage = '주소를 입력해주세요.';
                break;
              }

              break;
            case 'addressDetail':
              if (value === '') {
                errorMessage = '상세주소를 입력해주세요.';
                break;
              }

              break;
            default:
              break;
          }
          tempError = { ...tempError, [key]: errorMessage };
        }

        setError(tempError);

        if (!tempError.address && !tempError.addressDetail) {
          setModalAddress({ ...form, isVisible: false });
        }
        break;
      case 'close':
        setModalAddress({ ...form, isVisible: false });
        break;
    }
  };

  const handleChange = (id: string, value: string | Date) => {
    setForm({ ...form, [id]: value });
  };

  return (
    <Modal isVisible={modalAddress.isVisible}>
      <$.Wrapper>
        <div className="headerWrapper">
          <div className="imgContainer">
            <img
              src="/icons/close.svg"
              alt="close"
              onClick={() => handleClick('close')}
            />
          </div>
          <div>주소수정</div>
        </div>
        <div className="contentWrapper">
          <div className="inputContainer">
            <InputAddressWithLabel
              id="address"
              label="주소"
              direction="horizontal"
              isRequiredMark={true}
              error={error.address}
              value={form.address}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer">
            <InputWithLabel
              id="addressDetail"
              label="상세주소"
              direction="horizontal"
              size="small"
              isRequiredMark={true}
              error={error.addressDetail}
              value={form.addressDetail}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="footerWrapper" onClick={() => handleClick('submit')}>
          수정
        </div>
      </$.Wrapper>
    </Modal>
  );
};

export default ModalAddressInput;
