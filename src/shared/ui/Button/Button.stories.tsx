import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
    children: 'text',
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    theme: ButtonTheme.CLEAR_INVERTED,
    children: 'text',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    children: 'test',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const Background = Template.bind({});
Background.args = {
    children: 'test',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
Background.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '<',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true,
};
