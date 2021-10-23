import actionTypes from './actionTypes'
import { MovieModalActions } from './models'

export const openAddMovieModal = (): MovieModalActions => ({
    type: actionTypes.OPEN_ADD_MOVIE_MODAL,
})
export const openEditMovieModal = (movieId: number): MovieModalActions => ({
    type: actionTypes.OPEN_EDIT_MOVIE_MODAL,
    payload: movieId,
})
export const openDeleteMovieModal = (movieId: number): MovieModalActions => ({
    type: actionTypes.OPEN_DELETE_MOVIE_MODAL,
    payload: movieId,
})
export const closeModal = (): MovieModalActions => ({
    type: actionTypes.CLOSE_MODAL,
})
