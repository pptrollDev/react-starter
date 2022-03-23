import React, { useEffect, useState } from 'react';
import { ITModalAddressInput } from './type';
import ModalAddressInput from '../../organisms/ModalAddressInput';
import {
  IModalAddressInputError,
  IModalAddressInputForm
} from '../../organisms/ModalAddressInput/type';

const TModalAddressInput = ({ modalAddress, setModalAddress }: ITModalAddressInput) => {
  const [form, setForm] = useState<IModalAddressInputForm>({
    address: '',
    addressDetail: '',
    isVisible: false
  });
  const [error, setError] = useState<IModalAddressInputError>({
    address: undefined,
    addressDetail: undefined
  });

  useEffect(() => {
    setForm(modalAddress);
  }, [modalAddress]);

  return (
    <ModalAddressInput
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      modalAddress={modalAddress}
      setModalAddress={setModalAddress}
    />
  );
};

export default TModalAddressInput;
