import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles:Article[];
    isLoading?:boolean;
    view?: ArticleView;

}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
    } = props;

    const { t } = useTranslation();
    const renderArticleList = (article: Article) => (
        <ArticleListItem className={cls.card} article={article} view={view} />
    );
    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {articles.length > 0
                ? articles.map(renderArticleList)
                : null}
        </div>
    );
};
