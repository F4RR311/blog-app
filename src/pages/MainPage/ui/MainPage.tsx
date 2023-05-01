import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (

        <Page>
            {t('Главная страница')}
            <RatingCard
                title="Ваш ответ"
                feedbackTitle="Оставь отзыв"
                hasFeedback
            />
        </Page>

    );
};
export default MainPage;
