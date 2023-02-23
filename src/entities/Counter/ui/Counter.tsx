import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounerValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {

}

export const Counter = (props: CounterProps) => {
    const dispach = useDispatch();
    const { t } = useTranslation();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispach(counterActions.increment());
    };
    const decrement = () => {
        dispach(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('increment')}
            </button>
            <button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </button>
        </div>
    );
};
