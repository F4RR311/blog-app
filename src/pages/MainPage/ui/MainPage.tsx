import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import { Page } from '@/widgets/Page/Page';

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
                title="Vash fedback"
                feedbackTitle="Ostavb otziv"
                hasFeedback
            />
        </Page>

    );
};
export default MainPage;
