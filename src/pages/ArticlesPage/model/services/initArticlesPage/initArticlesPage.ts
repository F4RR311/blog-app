import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>>(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkAPI) => {
            const {
                getState, dispatch,
            } = thunkAPI;

            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const orderFormUrl = searchParams.get('order') as SortOrder;
                const sortFormUrl = searchParams.get('sort') as ArticleSortField;
                const searchFormUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type') as ArticleType;

                if (orderFormUrl) {
                    dispatch(articlesPageActions.setOrder(orderFormUrl));
                }

                if (sortFormUrl) {
                    dispatch(articlesPageActions.setSort(sortFormUrl));
                }

                if (searchFormUrl) {
                    dispatch(articlesPageActions.setSearch(searchFormUrl));
                }
                if (typeFromUrl) {
                    dispatch(articlesPageActions.setType(typeFromUrl));
                }

                dispatch(articlesPageActions.initialState());
                dispatch(fetchArticleList({}));
            }
        },
    );
