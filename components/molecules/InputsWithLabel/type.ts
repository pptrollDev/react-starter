export interface IInputsWithLabel {
  id: string;
  label: string;
  type?: 'text' | 'number' | 'password';
  size?: 'small' | 'middle' | 'large';
  direction?: 'horizontal' | 'vertical';
  errors?: string[];
  maxLength?: number;
  disabled?: boolean;
  isRequiredMark?: boolean;
  placeholder?: string;
  value: string[];
  setError: (id: string, errors?: string[]) => void;
  onChange: (id: string, value: string[]) => void;
}
