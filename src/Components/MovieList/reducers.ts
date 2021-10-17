import actionTypes from './actionTypes'
import { MovieListState, MovieListAction } from './models'

export default (
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
