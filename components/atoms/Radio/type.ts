export interface IRadio {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  value: string;
  onChange: (id: string, value: string) => void;
}

export interface Radio {
  label: string;
  value: string;
}
