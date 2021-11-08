import { MovieFormAction } from 'Components/MovieForm/models'
import {
    closeModal,
    openAddMovieModal,
    openDeleteMovieModal,
    openEditMovieModal,
} from './actions'
import { modalReducers } from './reducers'

const defaultState = {
    isOpen: false,
}

describe('Modal Reducer Tests', () => {
    it('Add movie action', () => {
        const result = modalReducers(defaultState, openAddMovieModal())
        expect(result).toEqual({
            isOpen: true,
            formAction: MovieFormAction.ADD,
        })
    })
    it('Edit movie action', () => {
        const result = modalReducers(defaultState, openEditMovieModal(1234))
        expect(result).toEqual({
            isOpen: true,
            formAction: MovieFormAction.EDIT,
            movieId: 1234,
        })
    })
    it('Delete movie action', () => {
        const result = modalReducers(defaultState, openDeleteMovieModal(5678))
        expect(result).toEqual({
            isOpen: true,
            formAction: MovieFormAction.DELETE,
            movieId: 5678,
        })
    })
    it('Close modal window action', () => {
        const result = modalReducers({ isOpen: true }, closeModal())
        expect(result).toEqual({
            isOpen: false,
        })
    })
})
