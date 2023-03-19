import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Sidebar', () => {
    test('exists', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 1 },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 1 },
            },
        });
        userEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('2');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 1 },
            },
        });
        userEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
        // expect();
    });
});
