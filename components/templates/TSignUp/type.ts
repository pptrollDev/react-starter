import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';
import { IModalHospitalInputForm } from '../../organisms/ModalHospitalInput/type';

export interface ITSignUp {
  hospitalModal?: IModalHospitalInputForm;
  setHospitalModal: (hospital?: IModalHospitalInputForm) => void;
  setModal: (modal: IModalWithConfirm) => void;
}
