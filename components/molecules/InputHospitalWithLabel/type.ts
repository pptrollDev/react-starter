export interface IInputHospitalWithLabel {
  id: string;
  label: string;
  direction?: 'horizontal' | 'vertical';
  value?: IDraftHospital;
  placeholder?: string;
  options: IDraftHospital[];
  isRequiredMark?: boolean;
  onClick: (id: string, value?: string) => void;
  onChange: (id: string, value: IDraftHospital) => void;
}

export interface IDraftHospital {
  id?: string;
  name: string;
  address: string;
  addressDetail?: string;
  phone?: string;
  operatedStatus?: 'operated' | 'toBeOperated';
  toBeOperatedAt?: Date;
}
