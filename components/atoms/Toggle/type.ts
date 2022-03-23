export interface IToggle {
  id: string;
  checked: boolean;
  onChange: (id: string, value: string) => void;
}
