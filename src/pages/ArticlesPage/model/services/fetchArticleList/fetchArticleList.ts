import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticleListProps {
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>>(
        'articlesPage/fetchArticleList',
        async (props, thunkAPI) => {
            const { extra, rejectWithValue, getState } = thunkAPI;

            const limit = getArticlesPageLimit(getState());
            const sort = getArticlesPageSort(getState());
            const order = getArticlesPageOrder(getState());
            const search = getArticlesPageSearch(getState());
            const page = getArticlesPageNum(getState());

            try {
                addQueryParams({
                    sort, order, search,
                });
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                    },
                });
                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
