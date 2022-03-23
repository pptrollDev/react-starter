export interface IModalWithConfirm {
  id?: string;
  titleLabel?: string;
  contentLabel?: string;
  cancelButtonLabel?: string;
  confirmButtonLabel?: string;
  isVisible: boolean;
  onClick?: (id: string) => void;
}
