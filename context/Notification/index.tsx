import React, { useReducer, useContext, createContext, useEffect } from 'react';
import { INotificationAction, INotificationDispatch, INotificationState } from './type';
import Notification from '../../components/atoms/Notification';

const NotificationStateContext = createContext<INotificationState | undefined>(undefined);
const NotificationDispatchContext = createContext<INotificationDispatch | undefined>(
  undefined
);

function reducer(
  state: INotificationState,
  action: INotificationAction
): INotificationState {
  switch (action.type) {
    case 'CreateNotification':
      return {
        ...state,
        notification: action.notification
      };
    case 'RemoveNotification':
      return {
        ...state,
        notification: undefined
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    notification: undefined
  });

  return (
    <NotificationStateContext.Provider value={state}>
      <NotificationDispatchContext.Provider value={dispatch}>
        {state.notification && (
          <Notification label={state.notification.label} type={state.notification.type} />
        )}
        {children}
      </NotificationDispatchContext.Provider>
    </NotificationStateContext.Provider>
  );
}

export function useNotificationState() {
  const state = useContext(NotificationStateContext);
  if (!state) throw new Error('Cannot find Provider');
  return state;
}

export function useNotificationDispatch() {
  const dispatch = useContext(NotificationDispatchContext);
  if (!dispatch) throw new Error('Cannot find Provider');
  return dispatch;
}
