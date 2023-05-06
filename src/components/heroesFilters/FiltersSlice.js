import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { useHttp } from '../../hooks/http.hook';

const initialState = {
    filters: [],
    filtersLadingStatus: 'idle',
    activeFilter: 'all',
}

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    () => {
        const { request } = useHttp();
        return request("http://localhost:3001/filters")
    }
)

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload
        },
        // filtersFetchingError: state => {
        //     state.filtersLadingStatus = 'error'
        // },
        // filtersFetched: (state, action) => {
        //     state.filters = action.payload
        //     state.filtersLadingStatus = 'idle'
        // },
        // filtersFetching: state => {
        //     state.filtersLadingStatus = 'loading'
        // }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFilters.pending, state => { state.filtersLadingStatus = 'loading' })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filters = action.payload
                state.filtersLadingStatus = 'idle'
            })
            .addCase(fetchFilters.rejected, state => {
                state.filtersLadingStatus = 'error'
            })
            .addDefaultCase(() => { })
    }
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const {
    activeFilterChanged,
    filtersFetchingError,
    filtersFetched,
    filtersFetching
} = actions;