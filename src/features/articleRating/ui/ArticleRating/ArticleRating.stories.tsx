import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleRating from './ArticleRating';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    articleId: '1',
};

Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
