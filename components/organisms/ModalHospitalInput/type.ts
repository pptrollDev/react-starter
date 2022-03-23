import { IModalWithConfirm } from '../../molecules/ModalWithConfirm/type';

export interface IModalHospitalInput {
  form: IModalHospitalInputForm;
  setForm: (form: IModalHospitalInputForm) => void;
  error: IModalHospitalInputError;
  setError: (error: IModalHospitalInputError) => void;
  setHospitalModal: (hospital: IModalHospitalInputForm) => void;
  modal: IModalWithConfirm;
  setModal: (modal: IModalWithConfirm) => void;
}

export interface IModalHospitalInputForm {
  name: string;
  address: string;
  addressDetail: string;
  phone: string;
  operatedStatus: 'operated' | 'toBeOperated';
  toBeOperatedAt?: Date;
}

export interface IModalHospitalInputError {
  name?: string;
  address?: string;
  addressDetail?: string;
  phone?: string;
  operatedStatus?: string;
}
