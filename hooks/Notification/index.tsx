import { useNotificationDispatch } from '../../context/Notification';
import { INotification } from '../../components/atoms/Notification/type';

export function useNotification() {
  const dispatch = useNotificationDispatch();

  function notification(notification: INotification) {
    dispatch({ type: 'CreateNotification', notification });

    setTimeout(() => {
      dispatch({ type: 'RemoveNotification' });
    }, 1000);
  }

  return notification;
}
