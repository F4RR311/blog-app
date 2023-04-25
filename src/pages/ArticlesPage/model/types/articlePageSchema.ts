import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    page:number;
    limit?:number;
    hasMore:boolean;
    order: SortOrder;
    search:string;
    type: ArticleType;
    sort: ArticleSortField;
    _inited:boolean;
}
