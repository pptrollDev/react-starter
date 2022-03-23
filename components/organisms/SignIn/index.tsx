import React from 'react';
import * as $ from './styles';
import { ISignIn } from './type';
import Button from '../../atoms/Button';
import CardWrapper from '../../atoms/CardWrapper';
import Input from '../../atoms/Input';
import Checkbox from '../../atoms/Checkbox';
import ModalWithConfirm from '../../molecules/ModalWithConfirm';
import { useRouter } from 'next/router';

const SignIn = ({
  form,
  setForm,
  error,
  setError,
  modal,
  setModal,
  signInHospitalAdminUser
}: ISignIn) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    switch (id) {
      case 'signup':
        router.push('/signup');
        break;
      case 'submit':
        signInHospitalAdminUser();
        break;
      case 'signinModalConfirm':
        setModal({ ...modal, isVisible: false });
        break;
    }
  };

  const handleChange = (id: string, value: string) => {
    switch (id) {
      case 'isSaveUsername':
        setForm({ ...form, [id]: JSON.parse(value) });
        break;
      default:
        setForm({ ...form, [id]: value });
        break;
    }
  };

  return (
    <>
      <ModalWithConfirm
        id={modal.id}
        titleLabel={modal.titleLabel}
        contentLabel={modal.contentLabel}
        confirmButtonLabel={modal.confirmButtonLabel}
        cancelButtonLabel={modal.cancelButtonLabel}
        isVisible={modal.isVisible}
        onClick={handleClick}
      />
      <$.Wrapper>
        <div className="cardWrapper">
          <div className="headerWrapper">
            <img src="/images/signInLogo.svg" alt="logo" />
          </div>
          <div className="contentWrapper">
            <CardWrapper>
              <div className="inputContainer">
                <Input
                  id="username"
                  placeholder="관리자 아이디"
                  src={{ default: '/icons/name.svg', focus: '/icons/nameFocus.svg' }}
                  value={form.username}
                  onSubmit={handleClick}
                  onChange={handleChange}
                />
              </div>
              <div className="inputContainer">
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  src={{
                    default: '/icons/password.svg',
                    focus: '/icons/passwordFocus.svg'
                  }}
                  value={form.password}
                  onSubmit={handleClick}
                  onChange={handleChange}
                />
              </div>
              <div className="buttonWrapper">
                <div className="checkboxContainer">
                  <Checkbox
                    id="isSaveUsername"
                    label="아이디저장"
                    checked={form.isSaveUsername}
                    onChange={handleChange}
                  />
                </div>
                <div className="buttonContainer">
                  <span className="signupButton" onClick={() => handleClick('signup')}>
                    회원가입
                  </span>
                </div>
              </div>
              <div className="submitWrapper">
                <div className="errorContainer">{error?.signIn}</div>
                <div>
                  <Button id="submit" label="로그인" onClick={handleClick} />
                </div>
              </div>
            </CardWrapper>
          </div>
        </div>
      </$.Wrapper>
    </>
  );
};

export default SignIn;
