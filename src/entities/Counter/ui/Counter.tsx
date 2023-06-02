import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useGetCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValue = useGetCounterValue();
    const { t } = useTranslation();
    const { decrement, increment, addFive } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    const handleAddFive = () => {
        addFive(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={handleIncrement}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={handleDecrement}
            >
                {t('decrement')}
            </Button>

            <Button
                data-testid="decrement-btn"
                onClick={handleAddFive}
            >
                {t('addfive')}
            </Button>
        </div>
    );
};
