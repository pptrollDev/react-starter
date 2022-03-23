export interface IDropdown {
  label: string;
  options: IOption[];
  onClick: (value: string) => void;
}

interface IOption {
  label: string;
  value: string;
}
