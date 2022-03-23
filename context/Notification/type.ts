import { Dispatch } from 'react';
import { INotification } from '../../components/atoms/Notification/type';

export type INotificationDispatch = Dispatch<INotificationAction>;

export interface INotificationState {
  notification: INotification | undefined;
}

export type INotificationAction =
  | { type: 'CreateNotification'; notification: INotification }
  | { type: 'RemoveNotification' };
