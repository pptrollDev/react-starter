export interface IInput {
  id: string;
  type?: 'text' | 'number' | 'password';
  placeholder?: string;
  src?: {
    default: string;
    focus: string;
  };
  imageDirection?: 'left' | 'right';
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
  maxLength?: number;
  isError?: boolean;
  value?: string;
  onSubmit?: (id: string) => void;
  onChange: (id: string, value: string) => void;
}
