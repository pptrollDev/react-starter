import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useNotification } from '../../../hooks/Notification';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { IHospital, ISignUpError, ISignUpForm } from '../../organisms/SignUp/type';
import SignUp from '../../organisms/SignUp';
import { ITSignUp } from './type';
import dayjs from 'dayjs';

const TSignUp = ({ hospitalModal, setHospitalModal, setModal }: ITSignUp) => {
  const router = useRouter();
  const notification = useNotification();
  const [isJoinableUsername, setIsJoinableUsername] = useState<boolean>();
  const [form, setForm] = useState<ISignUpForm>({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
    phone: '',
    username: '',
    draftHospital: undefined,
    essentialAgree: false,
    receiveMarketingAgreed: false
  });
  const [error, setError] = useState<ISignUpError>({
    email: undefined,
    name: undefined,
    password: undefined,
    passwordCheck: undefined,
    phone: undefined,
    username: undefined,
    draftHospital: undefined,
    essentialAgree: undefined
  });
  const [hospitals, setHospitals] = useState<IHospital[]>([]);

  useEffect(() => {
    if (hospitalModal) setForm({ ...form, draftHospital: hospitalModal });
  }, [hospitalModal]);

  const [getJoinableUsername] = useLazyQuery(JOINABLE_USERNAME, {
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      setIsJoinableUsername(res.joinableUsername);
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [getHospitals] = useLazyQuery(HOSPITALS, {
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      setHospitals(res.hospitals);
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [signUp] = useMutation(SIGNUP_HOSPITAL_ADMIN, {
    onCompleted() {
      router.push({
        pathname: '/signup/complete',
        query: {
          hospitalName: form.draftHospital?.name,
          hospitalAddress: form.draftHospital?.address,
          hospitalAddressDetail: form.draftHospital?.addressDetail,
          hospitalPhone: form.draftHospital?.phone,
          hospitalOperatedStatus: form.draftHospital?.operatedStatus,
          hospitalToBeOperatedAt: dayjs(form.draftHospital?.toBeOperatedAt).format(
            'YYYY.MM.DD'
          ),
          name: form.name,
          email: form.email,
          username: form.username,
          phone: form.phone
        }
      });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  return (
    <SignUp
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      setHospitalModal={setHospitalModal}
      setModal={setModal}
      hospitals={hospitals}
      isJoinableUsername={isJoinableUsername}
      getHospitals={(name) => {
        getHospitals({
          variables: {
            where: {
              name: name
            }
          }
        });
      }}
      doubleCheck={(username) => {
        getJoinableUsername({ variables: { username: username } });
      }}
      signUp={() => {
        const { passwordCheck, essentialAgree, draftHospital, ...formObj } = form;
        if (form.draftHospital?.id)
          signUp({
            variables: {
              data: {
                ...formObj,
                hospitalId: form.draftHospital.id
              }
            }
          });
        else
          signUp({
            variables: {
              data: { ...formObj, draftHospital: form.draftHospital }
            }
          });
      }}
    />
  );
};

export default TSignUp;

const SIGNUP_HOSPITAL_ADMIN = gql`
  mutation signUpHospitalAdminUser($data: SignUpHospitalAdminUserInput!) {
    signUpHospitalAdminUser(data: $data) {
      id
    }
  }
`;

const JOINABLE_USERNAME = gql`
  query joinableUsername($username: String!) {
    joinableUsername(username: $username)
  }
`;

const HOSPITALS = gql`
  query hospitals($where: FindHospitalsInput!) {
    hospitals(where: $where) {
      id
      name
      address
    }
  }
`;
