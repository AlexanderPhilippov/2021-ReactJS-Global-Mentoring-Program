import { MovieFormAction } from 'Components/MovieForm/models'
import actionTypes from './actionTypes'
import { MovieModalActions, MovieModalState } from './models'

export const modalReducers = (
    state: MovieModalState = {
        isOpen: false,
    },
    action: MovieModalActions
): MovieModalState => {
    switch (action.type) {
        case actionTypes.OPEN_ADD_MOVIE_MODAL:
            return {
                isOpen: true,
                formAction: MovieFormAction.ADD,
            }
        case actionTypes.OPEN_EDIT_MOVIE_MODAL:
            return {
                isOpen: true,
                formAction: MovieFormAction.EDIT,
                movieId: action.payload,
            }
        case actionTypes.OPEN_DELETE_MOVIE_MODAL:
            return {
                isOpen: true,
                formAction: MovieFormAction.DELETE,
                movieId: action.payload,
            }
        case actionTypes.CLOSE_MODAL:
            return {
                isOpen: false,
            }
        default:
            return state
    }
}
