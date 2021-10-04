import { MovieModel } from 'Components/Movie/models'
import { MovieFormAction } from 'Components/MovieForm/models'

export interface MoviesResponseModel {
    data: MovieModel[]
    totalAmount: number
    offset: number
    limit: number
}

export interface MoviesHeaderProps {
    total: number
}

export interface MovieListLocalState {
    isModalOpen: boolean
    selectedMovie?: MovieModel
    currentAction?: MovieFormAction
}

export interface MovieListReducerAction {
    payload: MovieListLocalState
}
