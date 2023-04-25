import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/Stack';
import { ListBox } from '@/shared/ui/Popups/components/ListBox/ListBox';
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

            <HStack>
                <ListBox
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '112', content: '1111' },
                        { value: '22', content: '2' },
                        { value: '33', content: '33', disabled: true },
                        { value: '44', content: '21313' },
                    ]}
                />
            </HStack>

        </Page>

    );
};
export default MainPage;
