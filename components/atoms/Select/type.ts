export interface ISelect {
  id: string;
  value: string;
  width?: string;
  size?: 'large' | 'middle' | 'small';
  placeholder?: string;
  isError?: boolean;
  options: IOption[];
  onChange: (id: string, value: string) => void;
}

export interface IOption {
  label: string;
  value: string;
}
