import { IDraftHospital } from '../../molecules/InputHospitalWithLabel/type';

export interface ISignUpComplete {
  userInfo: IUserInfo;
  onClick: (id: string) => void;
}

export interface IUserInfo {
  email: string;
  name: string;
  phone: string;
  username: string;
  hospital?: IDraftHospital;
}
