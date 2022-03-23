export interface ITextarea {
  id: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  maxLength?: number;
  value?: string;
  onChange: (id: string, value: string) => void;
}
