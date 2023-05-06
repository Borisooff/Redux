import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const heroesAdapter = createEntityAdapter();

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }
const initialState = heroesAdapter.getInitialState({
    heroesLoadingStatus: 'idle'
});

export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    async () => {
        const { request } = useHttp();
        return await request("http://localhost:3001/heroes")
    }
)

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        // heroesFetching: state => { state.heroesLoadingStatus = 'loading' },
        // heroesFetched: (state, action) => {
        //     state.heroesLoadingStatus = 'idle';
        //     state.heroes = action.payload;
        // },
        // heroesFetchingError: state => {
        //     state.heroesLoadingStatus = 'error';
        // },
        heroDelete: (state, action) => {
            // state.heroes = state.heroes.filter(hero => hero.id !== action.payload)
            heroesAdapter.removeOne(state, action.payload)
        },
        heroAdd: (state, action) => {
            heroesAdapter.addOne(state, action.payload);
            // state.heroes.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => { state.heroesLoadingStatus = 'loading' })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                // state.heroes = action.payload;
                heroesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchHeroes.rejected, state => {
                state.heroesLoadingStatus = 'error';
            })
            .addDefaultCase(() => { })
    }
});

const { actions, reducer } = heroesSlice;

export default reducer;

// export const { selectAll } = heroesAdapter.getSelectors(state => state.heroes);
const { selectAll } = heroesAdapter.getSelectors(state => state.heroesReducer);

export const filtredHeroesSelector = createSelector(
    (state) => state.filtersReducer.activeFilter,
    // (state) => state.heroesReducer.heroes,
    selectAll,
    (filter, heroes) => {
        if (filter === 'all') {
            return heroes
        } else {
            return heroes.filter(hero => hero.element === filter)
        }
    }
)

export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroDelete,
    heroAdd
} = actions;