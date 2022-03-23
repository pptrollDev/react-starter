export interface IToggleWithLabel {
  id: string;
  label: string;
  direction?: 'horizontal' | 'vertical';
  value: boolean;
  onChange: (id: string, value: string) => void;
}
