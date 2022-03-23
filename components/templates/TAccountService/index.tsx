import React, { useEffect, useState } from 'react';
import AccountService from '../../organisms/AccountService';
import {
  IAccountServiceError,
  IAccountServiceForm,
  IChart
} from '../../organisms/AccountService/type';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useNotification } from '../../../hooks/Notification';
import { useUserState } from '../../../context/User';
import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';
import { useRouter } from 'next/router';

const TAccountService = () => {
  const notification = useNotification();
  const userState = useUserState();
  const router = useRouter();
  const [status, setStatus] = useState<string>();
  const [charts, setCharts] = useState<IChart[]>();
  const [isCheckNhisCode, setISCheckNhisCode] = useState<boolean>();
  const [form, setForm] = useState<IAccountServiceForm>({
    checked: false,
    chartId: '',
    nhisCode: '',
    installationMethod: ''
  });
  const [error, setError] = useState<IAccountServiceError>({
    chartId: undefined,
    nhisCode: undefined
  });
  const [modal, setModal] = useState<IModalWithConfirm>({
    isVisible: false
  });

  useEffect(() => {
    getCharts();
  }, []);

  useEffect(() => {
    if (
      userState?.hospitalHospitalAdminUsers[0].hospital.receiptServiceAlliance?.status
    ) {
      setStatus(
        userState.hospitalHospitalAdminUsers[0].hospital.receiptServiceAlliance.status
      );
    } else {
      setStatus('');
    }
  }, [userState]);

  const [getCharts] = useLazyQuery(CHARTS, {
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      setCharts(res.charts);
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [getCheckNhisCode] = useLazyQuery(CHECK_NHISCODE, {
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      setISCheckNhisCode(res.checkNhisCode);
      if (!res.checkNhisCode)
        setError({ ...error, nhisCode: '이미 등록되어있는 요양기관번호입니다.' });
      else setError({ ...error, nhisCode: undefined });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [createReceiptServiceAlliance] = useMutation(CREATE_RECEIPT_SERVICE_ALLIANCE, {
    onCompleted() {
      notification({ label: '서비스 신청이 완료되었습니다.', type: 'success' });
      router.push('/account');
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  return charts !== undefined && status !== undefined ? (
    <AccountService
      status={status}
      charts={charts}
      isCheckNhisCode={isCheckNhisCode}
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      modal={modal}
      setModal={setModal}
      checkNhisCode={(nhisCode) =>
        getCheckNhisCode({
          variables: {
            nhisCode: nhisCode
          }
        })
      }
      submit={() => {
        createReceiptServiceAlliance({
          variables: {
            data: {
              chartId: form.chartId,
              installationMethod: form.installationMethod,
              nhisCode: form.nhisCode
            }
          }
        });
      }}
    />
  ) : null;
};

export default TAccountService;

const CHARTS = gql`
  query charts {
    charts {
      id
      name
      installationMethod
    }
  }
`;

const CHECK_NHISCODE = gql`
  query checkNhisCode($nhisCode: String!) {
    checkNhisCode(nhisCode: $nhisCode)
  }
`;

const CREATE_RECEIPT_SERVICE_ALLIANCE = gql`
  mutation createReceiptServiceAlliance($data: CreateReceiptServiceAllianceInput!) {
    createReceiptServiceAlliance(data: $data) {
      id
      hospitalName
      hospitalAddress
      nhisCode
      hospitalResponsibilityEmail
      hospitalResponsibilityName
      hospitalResponsibilityPhone
      requestedAt
    }
  }
`;
