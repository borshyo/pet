import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import {
    StyleDecorator,
} from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator';
import {
    ThemeDecorator,
} from '../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {
    RouterDecorator,
} from '../../src/shared/config/storybook/decorators/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator());
