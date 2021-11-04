/**
 * @jest-environment jsdom
 */

import React from 'react'
import MovieCardMenu from './MovieCardMenu'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
}))

const setIsOpenMock = jest.fn()
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: () => [true, setIsOpenMock],
}))

it('MovieCardMenu Opened', () => {
    const store = mockStore({})
    const { asFragment, getByText } = render(
        <Provider store={store}>
            <MovieCardMenu movieId={1234} />
        </Provider>
    )
    fireEvent.click(getByText(/edit/i))
    fireEvent.click(getByText(/delete/i))
    fireEvent.click(getByText(/close menu/i))
    expect(mockDispatch).toBeCalledTimes(2)
    expect(setIsOpenMock).toBeCalledTimes(3)
    expect(asFragment()).toMatchSnapshot()
})
