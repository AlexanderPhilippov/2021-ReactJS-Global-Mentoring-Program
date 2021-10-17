import { MovieModel } from 'Components/Movie/models'
import { MovieFormAction } from 'Components/MovieForm/models'
import { BaseAction } from 'src/Store/rootReducer'

export interface MoviesResponseModel {
    data: MovieModel[]
    totalAmount: number
    offset: number
    limit: number
}

export interface MoviesHeaderProps {
    total?: number
}

export interface MovieListLocalState {
    isModalOpen: boolean
    selectedMovie?: MovieModel
    currentAction?: MovieFormAction
}

export interface MovieListReducerAction {
    payload: MovieListLocalState
}

export interface MovieListState extends Partial<MoviesResponseModel> {
    isLoading: boolean
    selectedGenre?: string
    sortBy?: string
    error?: string
}

export interface MovieListAction extends BaseAction {
    payload?: MoviesResponseModel
    error?: string
}

export enum SortOrder {
    DESC = 'desc',
    ASC = 'asc',
}

export interface MovieListFilterState {
    genre?: string
    sortBy?: string
    sortOrder?: SortOrder
}

export interface MovieListFilterAction extends BaseAction {
    payload: MovieListFilterState
}
