import React, { createContext, useContext, useReducer } from 'react';
import { IUserAction, IUserDispatch, IUserState } from '../User/type';

const UserStateContext = createContext<IUserState | undefined>(undefined);
const UserDispatchContext = createContext<IUserDispatch | undefined>(undefined);

function reducer(
  state: IUserState | undefined,
  action: IUserAction
): IUserState | undefined {
  switch (action.type) {
    case 'createUser':
      return action.data;
    default:
      throw new Error('Unhandled action');
  }
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUserState() {
  const state = useContext(UserStateContext);
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error('Cannot find Provider');
  return dispatch;
}
