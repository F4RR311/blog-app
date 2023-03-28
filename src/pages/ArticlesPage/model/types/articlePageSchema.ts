import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleSortField, ArticleView } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    page:number;
    limit?:number;
    hasMore:boolean;
    order: SortOrder;
    search:string;
    sort: ArticleSortField;
    _inited:boolean;
}
