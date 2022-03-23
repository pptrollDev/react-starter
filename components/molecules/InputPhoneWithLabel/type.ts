export interface IInputPhoneWithLabel {
  id: string;
  label: string;
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'middle' | 'large';
  error?: string;
  disabled?: boolean;
  isRequiredMark?: boolean;
  value?: string;
  onChange: (id: string, value: string) => void;
}
