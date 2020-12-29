import { CountAction, CountState } from './type';
import { INCREASE, DECREASE, INCREASE_BY } from './action';

const initialState: CountState = {
  count: 0
};

function count(state: CountState = initialState, action: CountAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default count;
