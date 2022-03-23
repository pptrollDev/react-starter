import { IDraftHospital } from '../../molecules/InputHospitalWithLabel/type';
import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';
import { IModalHospitalInputForm } from '../ModalHospitalInput/type';

export interface ISignUp {
  form: ISignUpForm;
  setForm: (form: ISignUpForm) => void;
  error: ISignUpError;
  setError: (error: ISignUpError) => void;
  setHospitalModal: (hospitalModal?: IModalHospitalInputForm) => void;
  setModal: (modal: IModalWithConfirm) => void;
  hospitals: IHospital[];
  isJoinableUsername?: boolean;
  getHospitals: (name: string) => void;
  doubleCheck: (username: string) => void;
  signUp: () => void;
}

export interface ISignUpForm {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
  phone: string;
  username: string;
  draftHospital?: IDraftHospital;
  essentialAgree: boolean;
  receiveMarketingAgreed: boolean;
}

export interface ISignUpError {
  email?: string;
  name?: string;
  password?: string;
  passwordCheck?: string;
  phone?: string;
  username?: string;
  draftHospital?: string;
  essentialAgree?: string;
}

export interface IHospital {
  id: string;
  name: string;
  address: string;
}
