import { decrease, increase, increaseBy } from './action';

export type CountAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

export type CountState = {
  count: number;
};
