import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounerValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {

}

export const Counter = (props:CounterProps) => {
    const dispach = useDispatch();

    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispach(counterActions.increment());
    };
    const decrement = () => {
        dispach(counterActions.decrement());
    };
    return (
        <div>
            <h1>
                value =
                {counterValue}
            </h1>
            <button onClick={increment}>
                increment
            </button>
            <button onClick={decrement}>
                decrement

            </button>
        </div>
    );
};
