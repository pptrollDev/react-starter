export interface IModalAddressInput {
  form: IModalAddressInputForm;
  setForm: (form: IModalAddressInputForm) => void;
  error: IModalAddressInputError;
  setError: (error: IModalAddressInputError) => void;
  modalAddress: IModalAddressInputForm;
  setModalAddress: (address: IModalAddressInputForm) => void;
}

export interface IModalAddressInputForm {
  address: string;
  addressDetail: string;
  isVisible: boolean;
}

export interface IModalAddressInputError {
  address?: string;
  addressDetail?: string;
}
