export interface ITextareaWithLabel {
  id: string;
  label: string;
  direction?: 'horizontal' | 'vertical';
  error?: string;
  maxLength?: number;
  disabled?: boolean;
  isRequiredMark?: boolean;
  placeholder?: string;
  value?: string;
  onChange: (id: string, value: string) => void;
}
