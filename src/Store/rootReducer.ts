import { combineReducers } from 'redux'
import movies from 'Components/MovieList/reducers'
import { MovieListState } from 'Components/MovieList/models'

export interface AppState {
    movies: MovieListState
}

export default combineReducers<AppState>({ movies })
