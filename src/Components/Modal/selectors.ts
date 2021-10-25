import { createSelector } from 'reselect'
import { AppState } from 'src/Store/rootReducer'

const modalState = (state: AppState) => state.modal

export const isModalOpen = createSelector(modalState, (modal) => modal.isOpen)
export const getSelectedMovieIdForm = createSelector(
    modalState,
    (modal) => modal.movieId
)
export const getCurrentModalFormAction = createSelector(
    modalState,
    (modal) => modal.formAction
)
