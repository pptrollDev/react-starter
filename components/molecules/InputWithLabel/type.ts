export interface IInputWithLabel {
  id: string;
  label: string;
  tooltipLabel?: string;
  type?: 'text' | 'number' | 'password';
  size?: 'small' | 'middle' | 'large';
  direction?: 'horizontal' | 'vertical';
  error?: string;
  maxLength?: number;
  disabled?: boolean;
  isRequiredMark?: boolean;
  placeholder?: string;
  value?: string;
  onChange: (id: string, value: string) => void;
}
