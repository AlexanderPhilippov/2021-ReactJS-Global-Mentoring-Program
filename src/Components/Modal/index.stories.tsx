import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MovieForm from 'Components/MovieForm'
import movieMock from '../../../.storybook/movieMock.json'

import Modal from '.'
import { AppState } from 'src/Store/rootReducer'
import { MovieFormAction } from 'Components/MovieForm/models'

const mockStore = configureStore()

const predefinedState: Partial<AppState> = {
    modal: {
        isOpen: true,
        movieId: undefined,
        formAction: MovieFormAction.ADD,
    },
    movies: {
        isLoading: false,
        data: [movieMock],
        totalAmount: 1,
    },
}

export default {
    title: 'Application/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (props) => <Modal {...props} />

export const Add = Template.bind({})
Add.args = { children: <MovieForm /> }
Add.decorators = [
    (story) => (
        <Provider store={mockStore(predefinedState)}>
            <StaticRouter location="/">{story()}</StaticRouter>
        </Provider>
    ),
]

export const Edit = Template.bind({})
Edit.args = { children: <MovieForm /> }
Edit.decorators = [
    (story) => (
        <Provider
            store={mockStore({
                ...predefinedState,
                modal: {
                    ...predefinedState.modal,
                    movieId: 1,
                    formAction: MovieFormAction.EDIT,
                },
            })}
        >
            <StaticRouter location="/">{story()}</StaticRouter>
        </Provider>
    ),
]

export const Delete = Template.bind({})
Delete.args = { children: <MovieForm /> }
Delete.decorators = [
    (story) => (
        <Provider
            store={mockStore({
                ...predefinedState,
                modal: {
                    ...predefinedState.modal,
                    movieId: 1,
                    formAction: MovieFormAction.DELETE,
                },
            })}
        >
            <StaticRouter location="/">{story()}</StaticRouter>
        </Provider>
    ),
]
