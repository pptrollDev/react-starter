import React, { useState } from 'react';
import TSignUp from '../../components/templates/TSignUp';
import { IModalWithConfirm } from '../../components/molecules/ModalWithConfirm/type';
import { IModalHospitalInputForm } from '../../components/organisms/ModalHospitalInput/type';
import TModalHospitalInput from '../../components/templates/TModalHospitalInput';

const SignUp = () => {
  const [hospitalModal, setHospitalModal] = useState<IModalHospitalInputForm>();
  const [modal, setModal] = useState<IModalWithConfirm>({ isVisible: false });

  return (
    <>
      <TModalHospitalInput
        hospitalModal={hospitalModal}
        setHospitalModal={setHospitalModal}
        modal={modal}
        setModal={setModal}
      />
      <TSignUp
        hospitalModal={hospitalModal}
        setHospitalModal={setHospitalModal}
        setModal={setModal}
      />
    </>
  );
};

export default SignUp;
