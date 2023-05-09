import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text } from '@/shared/ui/Text';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }:ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id:string}>();

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap="16">

                <EditableProfileCard id={id} />
            </VStack>

        </Page>
    );
};
export default ProfilePage;
