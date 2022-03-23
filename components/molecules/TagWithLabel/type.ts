export interface ITagWithLabel {
  id: string;
  label: string;
  placeholder?: string;
  direction?: 'vertical' | 'horizontal';
  isRequiredMark?: boolean;
  value: { value: string }[] | undefined;
  onChange: (id: string, value: { value: string }[]) => void;
}
