import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export const fetchNextArticlePage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>>(
        'articlesPage/fetchNextArticlePage',
        async (_, thunkAPI) => {
            const {
                extra, rejectWithValue, getState, dispatch,
            } = thunkAPI;
            const hasMore = getArticlesPageHasMore(getState());
            const page = getArticlesPageNum(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticleList({
                    page: page + 1,
                }));
            }
        },
    );
