import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',

};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlinedDArk = Template.bind({});
OutlinedDArk.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

OutlinedDArk.decorators = [ThemeDecorator(Theme.DARK)];

export const BackGroundTheme = Template.bind({});
BackGroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackGroundThemeInverted = Template.bind({});
BackGroundThemeInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
