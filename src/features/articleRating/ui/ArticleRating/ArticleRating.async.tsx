import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/skeleton/Skeleton';
import ArticleRating, { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props:ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={120} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
