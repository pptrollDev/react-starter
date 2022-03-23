import React, { useEffect, useState } from 'react';
import TabletSetting from '../../organisms/TabletSetting';
import { IForm } from '../../organisms/TabletSetting/type';
import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useUserState } from '../../../context/User';
import { useNotification } from '../../../hooks/Notification';
import { useRouter } from 'next/router';

const TTabletSetting = () => {
  const userState = useUserState();
  const notification = useNotification();
  const [linked, setLinked] = useState<boolean>();
  const [form, setForm] = useState<IForm>();
  const [modal, setModal] = useState<IModalWithConfirm>({
    isVisible: false
  });

  useEffect(() => {
    if (userState) {
      setLinked(
        userState.hospitalHospitalAdminUsers[0].hospital.receiptHospitalConfiguration
          ?.chart.linked || false
      );
      getReceiptHospitalConfiguration();
    }
  }, [userState]);

  const [getReceiptHospitalConfiguration] = useLazyQuery(RECEIPT_HOSPItAL_CONFIGURATION, {
    variables: {
      hospitalId: userState?.hospitalHospitalAdminUsers[0].hospital.id
    },
    fetchPolicy: 'no-cache',
    onCompleted(res) {
      if (res.receiptHospitalConfiguration) setForm(res.receiptHospitalConfiguration);
      else
        setForm({
          onlyReturnPatient: true,
          waitingOrderAlarmUse: true,
          sendWaitingOrderAlarmNumber: 1,
          tabletAddressInputUse: 'nouse',
          tabletDetailAddressInputUse: true,
          tabletAddressInputType: 'choice'
        });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  const [updateReceiptConfiguration] = useMutation(UPDATE_RECEIPT_CONFIGURATION, {
    onCompleted(res) {
      notification({ label: '태블릿 설정이 적용되었습니다.', type: 'success' });
    },
    onError(error) {
      notification({ label: error.message, type: 'error' });
    }
  });

  return linked !== undefined && form !== undefined ? (
    <TabletSetting
      linked={linked}
      form={form}
      setForm={setForm}
      modal={modal}
      setModal={setModal}
      submit={() =>
        updateReceiptConfiguration({
          variables: {
            data: form
          }
        })
      }
    />
  ) : null;
};

export default TTabletSetting;

const RECEIPT_HOSPItAL_CONFIGURATION = gql`
  query receiptHospitalConfiguration {
    receiptHospitalConfiguration {
      onlyReturnPatient
      waitingOrderAlarmUse
      tabletAddressInputType
      tabletAddressInputUse
      tabletDetailAddressInputUse
      sendWaitingOrderAlarmNumber
    }
  }
`;

const UPDATE_RECEIPT_CONFIGURATION = gql`
  mutation updateReceiptConfiguration($data: ReceiptHospitalConfigurationInput!) {
    updateReceiptConfiguration(data: $data)
  }
`;
