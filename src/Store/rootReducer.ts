import { combineReducers } from 'redux'
import {
    movieListReducer as movies,
    movieListFilterReducer as filter,
} from 'Components/MovieList/reducers'
import {
    MovieListFilterState,
    MovieListState,
} from 'Components/MovieList/models'
import { MovieModalState } from 'Components/Modal/models'
import { modalReducers as modal } from 'Components/Modal/reducers'

export interface AppState {
    movies: MovieListState
    filter: MovieListFilterState
    modal: MovieModalState
}

export interface BaseAction {
    type: string
    payload?: unknown
    error?: unknown
    meta?: unknown
}

export default combineReducers<AppState>({ movies, filter, modal })
