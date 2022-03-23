import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SignIn from '../../organisms/SignIn';
import { ISignInError, ISignInForm } from '../../organisms/SignIn/type';
import { gql, useMutation } from '@apollo/client';
import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';

const TSignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState<ISignInForm>({
    username: '',
    password: '',
    isSaveUsername: false
  });
  const [error, setError] = useState<ISignInError>({
    signIn: undefined
  });
  const [modal, setModal] = useState<IModalWithConfirm>({ isVisible: false });

  useEffect(() => {
    const localUsername = window.localStorage.getItem('username');
    if (localUsername)
      setForm({ ...form, username: localUsername, isSaveUsername: true });
  }, []);

  const [signInHospitalAdminUser] = useMutation(SIGN_IN_HOSPITAL_ADMIN_USER, {
    onCompleted({ signInHospitalAdminUser }) {
      if (signInHospitalAdminUser)
        window.localStorage.setItem('token', signInHospitalAdminUser.token);

      if (form.isSaveUsername) window.localStorage.setItem('username', form.username);
      else window.localStorage.removeItem('username');

      router.push('/hospital/default');
    },
    onError(error) {
      if (error.message === '관리자 승인 후 내일부터 사용할 수 있어요') {
        setModal({
          id: 'signin',
          titleLabel: '새로 가입하셨네요!',
          contentLabel: '관리자 승인 이후 사용할 수 있어요.',
          confirmButtonLabel: '확인',
          isVisible: true
        });
        return;
      }

      setError({ signIn: error.message });
    }
  });

  return (
    <SignIn
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      modal={modal}
      setModal={setModal}
      signInHospitalAdminUser={() => {
        const { isSaveUsername, ...signInHospitalAdminUserForm } = form;
        signInHospitalAdminUser({ variables: { data: signInHospitalAdminUserForm } });
      }}
    />
  );
};

export default TSignIn;

const SIGN_IN_HOSPITAL_ADMIN_USER = gql`
  mutation signInHospitalAdminUser($data: SignInHospitalAdminUserInput!) {
    signInHospitalAdminUser(data: $data) {
      token
    }
  }
`;
