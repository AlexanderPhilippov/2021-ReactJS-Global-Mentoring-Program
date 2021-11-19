import { AppState } from 'src/Store/rootReducer'
import { APP_INIT_STORE_STATE } from 'Utils/constants'
import actionTypes from './actionTypes'
import {
    MovieListState,
    MovieListAction,
    MovieListFilterState,
    MovieListFilterAction,
    SortOrder,
    SearchBy,
} from './models'

const initMovieListState = () => {
    const defaultState = { isLoading: false }
    if (typeof window !== 'undefined') {
        const serializedState = window[APP_INIT_STORE_STATE] as AppState
        return serializedState?.movies || defaultState
    }
    return defaultState
}

export const movieListReducer = (
    state: MovieListState = initMovieListState(),
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

const initFilterState = () => {
    const defaultState = {
        genre: SearchBy.ALL,
        sortBy: SearchBy.GENRES,
        sortOrder: SortOrder.DESC,
        search: '',
        searchBy: SearchBy.TITLE,
    }
    if (typeof window !== 'undefined') {
        const serializedState = window[APP_INIT_STORE_STATE] as AppState
        return serializedState?.filter || defaultState
    }
    return defaultState
}

export const movieListFilterReducer = (
    state: MovieListFilterState = initFilterState(),
    action: MovieListFilterAction
): MovieListFilterState => {
    switch (action.type) {
        case actionTypes.SET_MOVIES_FILTER_GENRE:
            return { ...state, genre: action.payload.genre }
        case actionTypes.SET_MOVIES_FILTER_SORT_BY:
            return { ...state, sortBy: action.payload.sortBy }
        case actionTypes.SET_MOVIES_FILTER_SORT_ORDER:
            return { ...state, sortOrder: action.payload.sortOrder }
        case actionTypes.SET_MOVIES_FILTER_SEARCH:
            return { ...state, search: action.payload.search }
        case actionTypes.SET_MOVIES_FILTER_SEARCH_BY:
            return { ...state, searchBy: action.payload.searchBy }
        case actionTypes.SET_MOVIES_FILTER_REFRESH_REQUIRED:
            return { ...state, refreshRequired: action.payload.refreshRequired }
        default:
            return state
    }
}
