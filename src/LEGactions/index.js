// import { createAction } from "@reduxjs/toolkit";
// import {heroesFetched, heroesFetchingError, heroesFetching} from '../components/heroesList/heroesSlice';
// import {filtersFetching, filtersFetched, filtersFetchingError} from '../components/heroesFilters/FiltersSlice';

// export const fetchHeroes = (request) => (dispatch) => {
//     dispatch(heroesFetching());
//     request("http://localhost:3001/heroes")
//         .then(data => dispatch(heroesFetched(data)))
//         .catch(() => dispatch(heroesFetchingError()))
// }

// export const fetchFilters = (request) => (dispatch) => {
//     dispatch(filtersFetching())
//     request("http://localhost:3001/filters")
//         .then(data => dispatch(filtersFetched(data)))
//         .catch(() => dispatch(filtersFetchingError()))
// }

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

// export const heroesFetching = createAction('HEROES_FETCHING');

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

// export const heroesFetched = createAction('HEROES_FETCHED');

// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }
// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')

// export const heroDelete = (heroId) => {
//     return {
//         type: 'HERO_DELETE',
//         payload: heroId
//     }
// }
// 
// export const heroDelete = createAction('HERO_DELETE')

// export const heroAdd = (hero) => {
//     return {
//         type: 'HERO_ADD',
//         payload: hero
//     }
// }
// export const heroAdd = createAction('HERO_ADD');

// export const activeFilterChanged = (filter) => {
//     return {
//         type: 'ACTIVE_FILTER_CHANGED',
//         payload: filter
//     }
// }

// export const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }

// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }

// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING',
//     }
// }
