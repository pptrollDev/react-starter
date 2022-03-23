import { IModalAddressInputForm } from '../../organisms/ModalAddressInput/type';

export interface ITModalAddressInput {
  modalAddress: IModalAddressInputForm;
  setModalAddress: (modalAddress: IModalAddressInputForm) => void;
}
