// const initialState = {
//     filters: [],
//     filtersLadingStatus: 'idle',
//     activeFilter: 'all',
// }

// const filtersReducer = (state = initialState, action) => {
//     switch (action.type) {
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

// export default filtersReducer;