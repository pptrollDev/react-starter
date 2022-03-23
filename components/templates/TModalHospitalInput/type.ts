import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';
import { IModalHospitalInputForm } from '../../organisms/ModalHospitalInput/type';

export interface ITModalHospitalInput {
  hospitalModal?: IModalHospitalInputForm;
  setHospitalModal: (hospitalModal: IModalHospitalInputForm) => void;
  modal: IModalWithConfirm;
  setModal: (modal: IModalWithConfirm) => void;
}
