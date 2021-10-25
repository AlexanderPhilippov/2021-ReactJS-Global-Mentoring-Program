import { MovieFormAction } from 'Components/MovieForm/models'
import { BaseAction } from 'src/Store/rootReducer'

export interface MovieModalState {
    formAction?: MovieFormAction
    movieId?: number
    isOpen: boolean
}

export interface MovieModalActions extends BaseAction {
    payload?: number
}
