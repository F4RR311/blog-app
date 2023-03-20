import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();
    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentList comments={[{
                id: '1',
                text: 'comm 1',
                user: {
                    id: '1',
                    username: 'ulba',
                    avatar: 'https://cq.ru/storage/uploads/posts/961737/fr.jpg',
                },
            },
            {
                id: '2',
                text: 'comm 2',
                user: {
                    id: '2',
                    username: 'Valerian',
                    avatar: 'https://cq.ru/storage/uploads/posts/961737/fr.jpg',
                },
            },
            ]}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
