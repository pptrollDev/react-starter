import { Dispatch } from 'react';

export type IUserDispatch = Dispatch<IUserAction>;

export interface IUserState {
  id: number;
  username: string;
  hospitalHospitalAdminUsers: IHospital[];
}

interface IHospital {
  hospital: {
    id: string;
    name: string;
    receiptHospitalConfiguration: { id: string; chart: { linked: boolean } } | null;
    receiptServiceAlliance?: { id: string; status: string };
  };
}

export type IUserAction = { type: 'createUser'; data: IUserState };
