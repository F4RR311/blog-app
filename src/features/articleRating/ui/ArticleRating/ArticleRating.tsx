import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';
import { useGetArticleRating, useRAteArticle } from '../../api/articleRatingApi';
import { RatingCard } from '@/entities/Rating';

export interface ArticleRatingProps {
    className?: string;
    articleId: string
}
// TODO Сделать оценку профиля ДЗ
const ArticleRating = (props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });

    const [rateArticleMutation] = useRAteArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onCancel = useCallback((starsCount: number, feedBack?: string) => {
        handleRateArticle(
            starsCount,
            feedBack,
        );
    }, [handleRateArticle]);

    const onAccept = useCallback((starsCount: number, feedBack?: string) => {
        handleRateArticle(
            starsCount,
            feedBack,
        );
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }
    const rating = data?.[0];
    return (
        <RatingCard
            onAccept={onCancel}
            onCancel={onAccept}
            rate={rating?.rate}
            title={t('оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье')}
            hasFeedback
        />
    );
};

export default ArticleRating;
