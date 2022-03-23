import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';

export interface ISignIn {
  form: ISignInForm;
  setForm: (form: ISignInForm) => void;
  error: ISignInError;
  setError: (error: ISignInError) => void;
  modal: IModalWithConfirm;
  setModal: (modal: IModalWithConfirm) => void;
  signInHospitalAdminUser: () => void;
}

export interface ISignInForm {
  password: string;
  username: string;
  isSaveUsername: boolean;
}

export interface ISignInError {
  signIn?: string;
}
