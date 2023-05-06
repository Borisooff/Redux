// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import ReduxThunk from 'redux-thunk';
// import heroesReducer from '../reducers/heroes';
import heroesReducer from '../components/heroesList/heroesSlice';
import filtersReducer from '../components/heroesFilters/FiltersSlice';
// import { getDefaultNormalizer } from '@testing-library/react';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {heroesReducer, filtersReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

// const store = createStore(
//     combineReducers({ heroesReducer, filtersReducer }),
//     compose(
//         applyMiddleware(ReduxThunk, stringMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//     ));

export default store;