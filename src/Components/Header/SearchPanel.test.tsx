/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import SearchPanel from './SearchPanel'
import { MemoryRouter } from 'react-router-dom'

const mockStore = configureStore()
it('MovieDetailsPanel', () => {
    const store = mockStore({})
    const { asFragment } = render(
        <Provider store={store}>
            <MemoryRouter>
                <SearchPanel />
            </MemoryRouter>
        </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
})
