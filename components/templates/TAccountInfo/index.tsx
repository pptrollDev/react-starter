import React, { useEffect, useState } from 'react';
import AccountInfo from '../../organisms/AccountInfo';
import { useNotification } from '../../../hooks/Notification';
import { IAccountInfoError, IAccountInfoForm } from '../../organisms/AccountInfo/type';
import { gql, useLazyQuery, useMutation } from '@apollo/client';

const TAccountInfo = () => {
  const notification = useNotification();
  const [form, setForm] = useState<IAccountInfoForm>({
    draftHospitalName: '',
    draftNhisCode: '',
    email: '',
    name: '',
    phone: '',
    username: ''
  });
  const [error, setError] = useState<IAccountInfoError>({
    draftHospitalName: undefined,
    draftNhisCode: undefined,
    email: undefined,
    name: undefined,
    phone: undefined,
    username: undefined
  });

  useEffect(() => {
    getMyHospitalAdminUser();
  }, []);

  const [getMyHospitalAdminUser] = useLazyQuery(MY_HOSPITAL_ADMIN_USER, {
    onCompleted(res) {
      setForm(res.myHospitalAdminUser);
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [updateMyHospitalAdminUser] = useMutation(UPDATE_MY_HOSPITAL_ADMIN_USER, {
    onCompleted() {
      notification({ label: '회원정보 수정이 완료되었습니다.', type: 'success' });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  return (
    <AccountInfo
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      submit={() => {
        const { draftHospitalName, draftNhisCode, username, ...updateForm } = form;
        updateMyHospitalAdminUser({
          variables: {
            data: updateForm
          }
        });
      }}
    />
  );
};

export default TAccountInfo;

const MY_HOSPITAL_ADMIN_USER = gql`
  query myHospitalAdminUser {
    myHospitalAdminUser {
      email
      name
      phone
      username
    }
  }
`;
const UPDATE_MY_HOSPITAL_ADMIN_USER = gql`
  mutation updateMyHospitalAdminUser($data: UpdateHospitalAdminUserInput!) {
    updateMyHospitalAdminUser(data: $data)
  }
`;
