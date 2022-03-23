import { Checkbox } from '../../atoms/Checkbox/type';

export interface ICheckboxesWithLabel {
  id: string;
  label: string;
  subLabel?: string;
  direction?: 'vertical' | 'horizontal';
  options: Checkbox[];
  value: string;
  isRequiredMark?: boolean;
  onChange: (id: string, value: string) => void;
}
