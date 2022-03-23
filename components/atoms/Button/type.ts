export interface IButton {
  id: string;
  label: string;
  disabled?: boolean;
  src?: string;
  imageDirection?: 'left' | 'right';
  onClick?: (id: string) => void;
}
