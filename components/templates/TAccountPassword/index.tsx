import React, { useState } from 'react';
import {
  IAccountPasswordError,
  IAccountPasswordForm
} from '../../organisms/AccountPassword/type';
import AccountPassword from '../../organisms/AccountPassword';
import { useNotification } from '../../../hooks/Notification';
import { gql, useMutation } from '@apollo/client';
import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';

const TAccountPassword = () => {
  const notification = useNotification();
  const [form, setForm] = useState<IAccountPasswordForm>({
    oldPassword: '',
    newPassword: '',
    newPasswordCheck: ''
  });
  const [error, setError] = useState<IAccountPasswordError>({
    oldPassword: undefined,
    newPassword: undefined,
    newPasswordCheck: undefined
  });
  const [modal, setModal] = useState<IModalWithConfirm>({
    isVisible: false
  });

  const [changeUserPassword] = useMutation(CHANGE_HOSPITAL_ADMIN_USER_PASSWORD, {
    onCompleted() {
      setModal({
        id: 'submit',
        titleLabel: '비밀번호가 재설정되었습니다.',
        contentLabel: `${'확인 시 자동 로그아웃됩니다.'}\n${'새로운 비밀번호로 다시 로그인해주세요.'}`,
        confirmButtonLabel: '확인',
        isVisible: true
      });
    },
    onError(error) {
      if (error.message === '비밀번호가 일치하지 않습니다!')
        setError({
          ...error,
          oldPassword: error.message
        });
      else notification({ label: error.message, type: 'error' });
    }
  });

  return (
    <AccountPassword
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      modal={modal}
      setModal={setModal}
      submit={() => {
        const { newPasswordCheck, ...updateForm } = form;
        changeUserPassword({ variables: { data: updateForm } });
      }}
    />
  );
};

export default TAccountPassword;

const CHANGE_HOSPITAL_ADMIN_USER_PASSWORD = gql`
  mutation changeMyHospitalAdminUserPassword(
    $data: ChangeMyHospitalAdminUserPasswordInput!
  ) {
    changeMyHospitalAdminUserPassword(data: $data)
  }
`;
