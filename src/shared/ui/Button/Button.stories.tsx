import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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
    theme: ThemeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const OutlinedDArk = Template.bind({});
OutlinedDArk.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

OutlinedDArk.decorators = [ThemeDecorator(Theme.DARK)];