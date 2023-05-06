// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
//     filters: [],
//     filtersLadingStatus: 'idle',
//     activeFilter: 'all',
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle',
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HERO_DELETE':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(hero => hero.id !== action.payload),
//             }
//         case 'HERO_ADD':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],
//             }
//         case 'ACTIVE_FILTER_CHANGED':
//             return {
//                 ...state,
//                 activeFilter: action.payload
//             }
//         case 'FILTERS_FETCHING_ERROR':
//             return {
//                 ...state,
//                 filtersLadingStatus: 'error'
//             }
//         case 'FILTERS_FETCHED':
//             return {
//                 ...state,
//                 filters: action.payload,
//                 filtersLadingStatus: 'idle'
//             }
//         case 'FILTERS_FETCHING':
//             return {
//                 ...state,
//                 filtersLadingStatus: 'loading'
//             }
//         default: return state
//     }
// }

// export default reducer;