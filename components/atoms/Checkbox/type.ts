export interface ICheckbox {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (id: string, value: string) => void;
}

export interface Checkbox {
  label: string;
  value: string;
}
