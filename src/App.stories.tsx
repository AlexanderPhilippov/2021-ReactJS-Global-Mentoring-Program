import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import App from './App'
import { AppState } from './Store/rootReducer'
import movieMock from '../.storybook/movieMock.json'

const mockStore = configureStore()

const predefinedStore: Partial<AppState> = {
    modal: { isOpen: false },
    movies: {
        isLoading: false,
        totalAmount: 3,
        data: [movieMock, { ...movieMock, id: 2 }, { ...movieMock, id: 3 }],
    },
    filter: { refreshRequired: undefined },
}

export default {
    title: 'Application/Page',
    component: App,
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = () => <App />

export const Search = Template.bind({})
Search.args = {}
Search.decorators = [
    (story) => (
        <div
            style={{
                backgroundColor: '#232323',
            }}
        >
            <Provider store={mockStore(predefinedStore)}>
                <StaticRouter location="/search">{story()}</StaticRouter>
            </Provider>
        </div>
    ),
]

export const MovieSelected = Template.bind({})
MovieSelected.args = {}
MovieSelected.decorators = [
    (story) => (
        <div
            style={{
                backgroundColor: '#232323',
            }}
        >
            <Provider store={mockStore(predefinedStore)}>
                <StaticRouter location="/search?movie=1">
                    {story()}
                </StaticRouter>
            </Provider>
        </div>
    ),
]

export const NotFound = Template.bind({})
NotFound.decorators = [
    (story) => (
        <div
            style={{
                backgroundColor: '#232323',
            }}
        >
            <StaticRouter location="/unknownRoute">{story()}</StaticRouter>
        </div>
    ),
]
