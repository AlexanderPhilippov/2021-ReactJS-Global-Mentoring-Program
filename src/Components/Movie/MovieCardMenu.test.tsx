/**
 * @jest-environment jsdom
 */

import React from 'react'
import MovieCardMenu from './MovieCardMenu'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

it('MovieCardMenu', () => {
    const mockStore = configureStore()
    const store = mockStore({})
    const mockDispatch = jest.fn()
    jest.mock('react-redux', () => ({
        useDispatch: () => mockDispatch,
    }))
    const { debug } = render(
        <Provider store={store}>
            <MovieCardMenu movieId={1234} />
        </Provider>
    )
    console.log(debug())
    expect(mockDispatch).not.toHaveBeenCalled()
})
