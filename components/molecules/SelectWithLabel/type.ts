import { IOption } from '../../atoms/Select/type';

export interface ISelectWithLabel {
  id: string;
  label: string;
  size?: 'small' | 'middle' | 'large';
  direction?: 'horizontal' | 'vertical';
  error?: string;
  value: string;
  placeholder?: string;
  options: IOption[];
  isRequiredMark?: boolean;
  onChange: (id: string, value: string) => void;
}
