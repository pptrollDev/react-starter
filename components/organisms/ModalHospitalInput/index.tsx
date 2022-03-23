import React from 'react';
import * as $ from './styles';
import Modal from '../../atoms/Modal';
import InputWithLabel from '../../molecules/InputWithLabel';
import RadiosWithLabel from '../../molecules/RadiosWithLabel';
import InputAddressWithLabel from '../../molecules/InputAddressWithLabel';
import { IModalHospitalInput, IModalHospitalInputError } from './type';
import InputDate from '../../atoms/InputDate';

const ModalHospitalInput = ({
  form,
  setForm,
  error,
  setError,
  setHospitalModal,
  modal,
  setModal
}: IModalHospitalInput) => {
  const handleClick = (id: string) => {
    switch (id) {
      case 'submit':
        let tempError: IModalHospitalInputError = {};

        for (const [key, value] of Object.entries(form)) {
          let errorMessage = undefined;
          switch (key) {
            case 'name':
              if (value === '') {
                errorMessage = '병원명을 입력해주세요.';
                break;
              }

              break;
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
            case 'phone':
              if (value === '') {
                errorMessage = '연락처를 입력해주세요';
                break;
              }

              break;
            default:
              break;
          }
          tempError = { ...tempError, [key]: errorMessage };
        }

        setError(tempError);

        if (
          !tempError.name &&
          !tempError.address &&
          !tempError.addressDetail &&
          !tempError.phone
        ) {
          setHospitalModal(form);
          setModal({ isVisible: false });
        }
        break;
      case 'close':
        setModal({ isVisible: false });
        break;
    }
  };

  const handleChange = (id: string, value: string | Date) => {
    setForm({ ...form, [id]: value });
  };

  return (
    <Modal isVisible={modal.isVisible}>
      <$.Wrapper>
        <div className="headerWrapper">
          <div className="imgContainer">
            <img
              src="/icons/close.svg"
              alt="close"
              onClick={() => handleClick('close')}
            />
          </div>
          <div>병원 직접입력</div>
        </div>
        <div className="contentWrapper">
          <div className="inputContainer">
            <InputWithLabel
              id="name"
              label="병원명"
              direction="horizontal"
              size="small"
              isRequiredMark={true}
              error={error.name}
              value={form.name}
              onChange={handleChange}
            />
          </div>
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
          <div className="inputContainer">
            <InputWithLabel
              id="phone"
              label="전화번호"
              direction="horizontal"
              size="small"
              isRequiredMark={true}
              error={error.phone}
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="inputContainer typeWrapper">
            <div className="typeContainer">
              <RadiosWithLabel
                id="operatedStatus"
                label="영업상태"
                direction="horizontal"
                options={[
                  { label: '영업중', value: 'operated' },
                  { label: '개원예정', value: 'toBeOperated' }
                ]}
                isRequiredMark={true}
                value={form.operatedStatus}
                onChange={handleChange}
              />
            </div>
            <div className="dateContainer">
              <InputDate
                id="toBeOperatedAt"
                size="small"
                disabled={form.operatedStatus === 'operated'}
                value={form.toBeOperatedAt}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="footerWrapper" onClick={() => handleClick('submit')}>
          입력
        </div>
      </$.Wrapper>
    </Modal>
  );
};

export default ModalHospitalInput;
