import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selector/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
    const { className } = props;
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">
                {t('count')}
                {counterValue}
            </h1>
            <Button data-testid="increment" onClick={increment}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement" onClick={decrement}>
                {t('decrement')}
            </Button>
        </div>
    );
};
