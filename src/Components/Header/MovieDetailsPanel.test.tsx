/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MovieDetailsPanel from './MovieDetailsPanel'
import { MemoryRouter } from 'react-router-dom'
import { MovieModel } from 'Components/Movie/models'

const movie: MovieModel = {
    id: 123,
    genres: ['action, dramma, comedy'],
    overview: 'Jest is tests',
    poster_path: 'http://test.images.com/poster/image',
    runtime: 180,
    title: 'Jest test movie object',
    release_date: '2021-11-07',
    vote_average: 10,
}

jest.mock('Components/MovieList/selectors', () => ({
    getMovieByIdSelector: () => movie,
}))

const mockStore = configureStore()
it('MovieDetailsPanel', () => {
    const store = mockStore({})
    const { asFragment } = render(
        <Provider store={store}>
            <MemoryRouter>
                <MovieDetailsPanel />
            </MemoryRouter>
        </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
})
