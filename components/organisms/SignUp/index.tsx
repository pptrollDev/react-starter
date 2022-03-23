import React, { useState } from 'react';
import * as $ from './styles';
import { ISignUp, ISignUpError } from './type';
import Button from '../../atoms/Button';
import CardWrapper from '../../atoms/CardWrapper';
import {
  emailValidation,
  passwordValidation,
  phoneValidation,
  usernameValidation
} from '../../../utils/validation';
import InputPhoneWithLabel from '../../molecules/InputPhoneWithLabel';
import InputEmailWithLabel from '../../molecules/InputEmailWithLabel';
import InputWithLabel from '../../molecules/InputWithLabel';
import InputHospitalWithLabel from '../../molecules/InputHospitalWithLabel';
import { IDraftHospital } from '../../molecules/InputHospitalWithLabel/type';
import Checkbox from '../../atoms/Checkbox';

const SignUp = ({
  form,
  setForm,
  error,
  setError,
  setHospitalModal,
  setModal,
  isJoinableUsername,
  hospitals,
  getHospitals,
  doubleCheck,
  signUp
}: ISignUp) => {
  const [timer, setTimer] = useState(0);

  const handleClick = (id: string, value?: string) => {
    switch (id) {
      case 'submit':
        let tempError: ISignUpError = {};

        for (const [key, value] of Object.entries(form)) {
          let errorMessage = undefined;
          switch (key) {
            case 'email':
              if (!emailValidation(value)) {
                errorMessage = '이메일 형식이 올바르지 않습니다.';
                break;
              }

              break;
            case 'name':
              if (value === '') {
                errorMessage = '관리자명을 입력해주세요.';
                break;
              }

              break;
            case 'password':
              if (value === '') {
                errorMessage = '비밀번호를 입력해주세요.';
                break;
              }

              if (!passwordValidation(value)) {
                errorMessage =
                  '8~20자 이내의 영문, 숫자, 특수문자를 조합하여 입력해주세요.';
                break;
              }

              break;
            case 'passwordCheck':
              if (value === '') {
                errorMessage = '비밀번호를 확인을 위해 한번 더 입력해주세요.';
                break;
              }

              if (value !== form.password) {
                errorMessage = '비밀번호가 일치하지 않습니다.';
                break;
              }

              break;
            case 'phone':
              if (!phoneValidation(form.phone)) {
                errorMessage = '연락처 형식이 올바르지 않습니다.';
                break;
              }

              break;
            case 'draftHospital':
              if (!form.draftHospital) {
                errorMessage = '가입병원 정보가 없습니다.';
                break;
              }

              break;
            case 'essentialAgree':
              if (!form.essentialAgree) {
                errorMessage = '회원가입 이용약관에 동의해주세요.';
                break;
              }

              break;
            case 'username':
              if (value === '') {
                errorMessage = '아이디를 입력해주세요.';
                break;
              }

              if (!usernameValidation(value)) {
                errorMessage =
                  '5~20자 이내의 영문 소문자 혹은 영문과 숫자를 조합하여 입력해주세요.';
                break;
              }

              if (!isJoinableUsername) {
                errorMessage = '이미 등록되어있는 아이디입니다.';
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
          !tempError.email &&
          !tempError.name &&
          !tempError.password &&
          !tempError.passwordCheck &&
          !tempError.phone &&
          !tempError.username &&
          !tempError.draftHospital &&
          !tempError.essentialAgree
        )
          signUp();
        break;
      case 'openModal':
        setModal({ isVisible: true });
        setHospitalModal(undefined);
        break;
      case 'draftHospital':
        if (value) getHospitals(value);
        break;
      case 'draftHospitalUpdate':
        setModal({ isVisible: true });
        if (form.draftHospital)
          setHospitalModal({
            name: form.draftHospital.name,
            address: form.draftHospital.address,
            addressDetail: form.draftHospital.addressDetail || '',
            phone: form.draftHospital.phone || '',
            operatedStatus: form.draftHospital.operatedStatus || 'operated',
            toBeOperatedAt: form.draftHospital.toBeOperatedAt
          });
        break;
    }
  };

  const handleChange = (id: string, value: string | IDraftHospital) => {
    switch (id) {
      case 'essentialAgree':
      case 'receiveMarketingAgreed':
        if (typeof value === 'string') setForm({ ...form, [id]: JSON.parse(value) });
        break;
      case 'draftHospital':
        if (typeof value === 'object') setForm({ ...form, draftHospital: value });
        setHospitalModal(undefined);
        break;
      default:
        setForm({ ...form, [id]: value });
        break;
    }

    if (id === 'username' && typeof value === 'string') {
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer: any = setTimeout(() => {
        doubleCheck(value);
      }, 200);
      setTimer(newTimer);
    }
  };

  return (
    <$.Wrapper>
      <div className="contentWrapper">
        <div className="headContainer">
          <img src="/images/signUpLogo.svg" alt="signUpLogo" />
        </div>
        <CardWrapper>
          <div className="mainInfoContainer">
            병원관리자이신가요?
            <br />
            <span>정보 입력</span> 후, 가입을 신청해주세요.
          </div>
          <div className="subInfoContainer">
            가입신청 후 관리자 승인을 통해 서비스를 이용할 수 있습니다.
          </div>
          <div className="formWrapper">
            <div className="inputContainer">
              <InputWithLabel
                id="username"
                label="아이디"
                placeholder="5~20자 이내의 영문 소문자 혹은 영문+숫자"
                isRequiredMark={true}
                error={error.username}
                value={form.username}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <InputWithLabel
                id="password"
                label="비밀번호"
                type="password"
                placeholder="8~20자 이내의 영문, 숫자, 특수문자"
                isRequiredMark={true}
                error={error.password}
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <InputWithLabel
                id="passwordCheck"
                label="비밀번호 확인"
                type="password"
                placeholder="비밀번호를 재입력해주세요"
                isRequiredMark={true}
                error={error.passwordCheck}
                value={form.passwordCheck}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <InputWithLabel
                id="name"
                label="관리자명"
                placeholder="관리자명을 입력해주세요"
                isRequiredMark={true}
                error={error.name}
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <InputPhoneWithLabel
                id="phone"
                label="연락처"
                isRequiredMark={true}
                error={error.phone}
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <InputEmailWithLabel
                id="email"
                label="이메일"
                isRequiredMark={true}
                error={error.email}
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="inputContainer">
              <InputHospitalWithLabel
                id="draftHospital"
                label="가입병원"
                placeholder="병원을 검색해주세요"
                value={form.draftHospital}
                options={hospitals}
                isRequiredMark={true}
                onClick={handleClick}
                onChange={handleChange}
              />
              {!form.draftHospital && (
                <div className={`hospitalEmptyWrapper ${error.draftHospital && 'error'}`}>
                  가입병원 정보가 없습니다.
                </div>
              )}
              <div className="hospitalCreateWrapper">
                혹시 병원이 검색되지 않나요?{' '}
                <label onClick={() => handleClick('openModal')}>직접 입력하기</label>
              </div>
            </div>
          </div>
          <div className="submitWrapper">
            <div className="agreeWrapper">
              <div>
                <Checkbox
                  id="agree"
                  label="전체동의"
                  checked={form.essentialAgree && form.receiveMarketingAgreed}
                  onChange={() => {
                    if (form.essentialAgree && form.receiveMarketingAgreed)
                      setForm({
                        ...form,
                        essentialAgree: false,
                        receiveMarketingAgreed: false
                      });
                    else
                      setForm({
                        ...form,
                        essentialAgree: true,
                        receiveMarketingAgreed: true
                      });
                  }}
                />
              </div>
              <div className="essentialWrapper">
                {form.essentialAgree ? (
                  <img
                    src="/icons/checkBlue.svg"
                    alt="check"
                    onClick={() => handleChange('essentialAgree', 'false')}
                  />
                ) : (
                  <img
                    src="/icons/checkGray.svg"
                    alt="check"
                    onClick={() => handleChange('essentialAgree', 'true')}
                  />
                )}
                <label>이용약관 동의</label>&nbsp;(필수)
              </div>
              <div className="optionalWrapper">
                {form.receiveMarketingAgreed ? (
                  <img
                    src="/icons/checkBlue.svg"
                    alt="check"
                    onClick={() => handleChange('receiveMarketingAgreed', 'false')}
                  />
                ) : (
                  <img
                    src="/icons/checkGray.svg"
                    alt="check"
                    onClick={() => handleChange('receiveMarketingAgreed', 'true')}
                  />
                )}
                <label>이벤트, 프로모션 알림 메일 및 SMS수신 동의</label>&nbsp;(선택)
              </div>
            </div>
            <div className="buttonWrapper">
              {error.essentialAgree && (
                <div className="errorWrapper">{error.essentialAgree}</div>
              )}
              <Button id="submit" label="가입신청" onClick={handleClick} />
            </div>
          </div>
        </CardWrapper>
      </div>
    </$.Wrapper>
  );
};

export default SignUp;
