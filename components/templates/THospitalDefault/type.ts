import { IModalAddressInputForm } from '../../organisms/ModalAddressInput/type';

export interface ITHospitalDefault {
  modalAddress?: IModalAddressInputForm;
  setModalAddress: (modalAddress: IModalAddressInputForm) => void;
}
