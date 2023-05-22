import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleTypeTabsSchema } from '../types/ArticleTypeTabsSchema';

const initialState: ArticleTypeTabsSchema = {
    
};

export const ArticleTypeTabsSlice = createSlice({
    name: 'ArticleTypeTabs',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ArticleTypeTabsActions } = ArticleTypeTabsSlice;
export const { reducer: ArticleTypeTabsReducer } = ArticleTypeTabsSlice;