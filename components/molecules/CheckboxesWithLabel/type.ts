import { Checkbox } from '../../atoms/Checkbox/type';

export interface ICheckboxesWithLabel {
  id: string;
  label: string;
  subLabel?: string;
  direction?: 'vertical' | 'horizontal';
  error?: string;
  options: Checkbox[];
  value: { value: string }[];
  isRequiredMark?: boolean;
  onChange: (id: string, value: { value: string }[]) => void;
}
