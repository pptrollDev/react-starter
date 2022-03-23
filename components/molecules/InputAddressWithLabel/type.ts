export interface IInputAddressWithLabel {
  id: string;
  label: string;
  direction?: 'horizontal' | 'vertical';
  error?: string;
  disabled?: boolean;
  isRequiredMark?: boolean;
  value?: string;
  onChange: (id: string, value: string) => void;
}
