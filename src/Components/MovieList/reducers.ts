import actionTypes from './actionTypes'
import {
    MovieListState,
    MovieListAction,
    MovieListFilterState,
    MovieListFilterAction,
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
    state: MovieListFilterState = { genre: '' },
    action: MovieListFilterAction
): MovieListFilterState => {
    switch (action.type) {
        case actionTypes.SET_MOVIES_FILTER_GENRE:
            return { ...state, genre: action.payload.genre }
        default:
            return state
    }
}
