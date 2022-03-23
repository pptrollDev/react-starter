export interface IInputDate {
  id: string;
  placeholder?: string;
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
  isError?: boolean;
  value?: Date;
  onChange: (id: string, value: Date) => void;
}
