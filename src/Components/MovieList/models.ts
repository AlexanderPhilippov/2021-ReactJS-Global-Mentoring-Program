import { MovieModel } from 'Components/Movie/models'
import { MovieFormAction } from 'Components/MovieForm/models'
import { BaseAction } from 'src/Store/rootReducer'

export interface MoviesResponseModel {
    data: MovieModel[]
    totalAmount: number
    offset: number
    limit: number
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

export enum SearchBy {
    GENRES = 'genres',
    TITLE = 'title',
    ALL = '',
}

export interface MovieListFilterState {
    genre?: string
    sortBy?: string
    sortOrder?: SortOrder
    search?: string
    searchBy?: SearchBy
}

export interface MovieListFilterAction extends BaseAction {
    payload: MovieListFilterState
}
