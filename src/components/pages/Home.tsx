import React from 'react';
import Counter from "../molecules/Counter";
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, increaseBy } from '../../modules/counter';
import { RootState } from '../../modules';

function Home() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    };

    return <div>
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    </div>;
}

export default Home;
