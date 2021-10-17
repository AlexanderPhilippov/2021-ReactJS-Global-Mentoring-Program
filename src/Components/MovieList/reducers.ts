import actionTypes from './actionTypes'
import {
    MovieListState,
    MovieListAction,
    MovieListFilterState,
    MovieListFilterAction,
    SortOrder,
} from './models'

export const movieListReducer = (
    state: MovieListState = { isLoading: false },
    action: MovieListAction
): MovieListState => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_BEGIN:
            return { ...state, isLoading: true }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return { ...action.payload, isLoading: false }
        case actionTypes.FETCH_MOVIES_ERROR:
            return { error: action.error, isLoading: false }
        default:
            return state
    }
}

export const movieListFilterReducer = (
    state: MovieListFilterState = {
        genre: '',
        sortBy: 'genres',
        sortOrder: SortOrder.DESC,
    },
    action: MovieListFilterAction
): MovieListFilterState => {
    switch (action.type) {
        case actionTypes.SET_MOVIES_FILTER_GENRE:
            return { ...state, genre: action.payload.genre }
        case actionTypes.SET_MOVIES_FILTER_SORT_BY:
            return { ...state, sortBy: action.payload.sortBy }
        case actionTypes.SET_MOVIES_FILTER_SORT_ORDER:
            return { ...state, sortOrder: action.payload.sortOrder }
        default:
            return state
    }
}
