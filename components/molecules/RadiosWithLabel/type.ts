import { Radio } from '../../atoms/Radio/type';

export interface IRadiosWithLabel {
  id: string;
  label: string;
  subLabel?: string;
  direction?: 'vertical' | 'horizontal';
  disabled?: boolean;
  error?: string;
  options: Radio[];
  value: string;
  isRequiredMark?: boolean;
  isFullWidth?: boolean;
  onChange: (id: string, value: string) => void;
}
