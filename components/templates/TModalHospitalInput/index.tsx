import React, { useEffect, useState } from 'react';
import { ITModalHospitalInput } from './type';
import {
  IModalHospitalInputError,
  IModalHospitalInputForm
} from '../../organisms/ModalHospitalInput/type';
import ModalHospitalInput from '../../organisms/ModalHospitalInput';

const TModalHospitalInput = ({
  hospitalModal,
  setHospitalModal,
  modal,
  setModal
}: ITModalHospitalInput) => {
  const [form, setForm] = useState<IModalHospitalInputForm>({
    name: '',
    address: '',
    addressDetail: '',
    phone: '',
    operatedStatus: 'operated',
    toBeOperatedAt: undefined
  });
  const [error, setError] = useState<IModalHospitalInputError>({
    name: undefined,
    address: undefined,
    addressDetail: undefined,
    phone: undefined,
    operatedStatus: undefined
  });

  useEffect(() => {
    if (hospitalModal) setForm(hospitalModal);
    else
      setForm({
        name: '',
        address: '',
        addressDetail: '',
        phone: '',
        operatedStatus: 'operated',
        toBeOperatedAt: undefined
      });
  }, [hospitalModal]);

  return (
    <ModalHospitalInput
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      setHospitalModal={setHospitalModal}
      modal={modal}
      setModal={setModal}
    />
  );
};

export default TModalHospitalInput;
