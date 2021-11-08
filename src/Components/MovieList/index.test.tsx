/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MovieList from './index'
import { Router, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { SortOrder } from './models'

const mockStore = configureStore()
const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
}))

jest.mock('./selectors.ts', () => ({
    getRefreshRequiredFlagSelector: () => '',
    getMoviesSelector: () => [],
    getTotalAmountSelector: () => 0,
}))

jest.mock('Components/Modal/selectors.ts', () => ({
    isModalOpen: () => false,
}))

const mockedPush = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockedPush,
    }),
}))

describe('Interactive components tests', () => {
    it('Snapshot', () => {
        const store = mockStore({})
        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <MovieList />
                </MemoryRouter>
            </Provider>
        )
        expect(asFragment()).toMatchSnapshot()
    })
    it('Genre select', () => {
        const history = createMemoryHistory()
        const store = mockStore({})
        const { getByText } = render(
            <Provider store={store}>
                <Router history={history}>
                    <MovieList />
                </Router>
            </Provider>
        )
        expect(history.location.pathname).toBe('/')

        fireEvent.click(getByText(/Documentary/i))
        expect(history.location.pathname).toBe('/search/Documentary/')

        fireEvent.click(getByText(/Drama/i))
        expect(history.location.pathname).toBe('/search/Drama/')

        fireEvent.click(getByText(/Animation/i))
        expect(history.location.pathname).toBe('/search/Animation/')
    })

    it('Sort order', () => {
        const store = mockStore({})
        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <MovieList />
                </MemoryRouter>
            </Provider>
        )
        fireEvent.click(getByText(`(${SortOrder.DESC})`))
        expect(mockedPush).toHaveBeenCalledTimes(1)
        expect(mockedPush).toHaveBeenCalledWith({
            pathname: '/',
            search: `sortOrder=${SortOrder.ASC}`,
        })
    })
})
