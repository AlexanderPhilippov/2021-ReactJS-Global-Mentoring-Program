import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import movieMock from '../../../.storybook/movieMock.json'

import MovieCard from '.'

const mockStore = configureStore()
const store = mockStore({})

export default {
    title: 'Application/MovieCard',
    component: MovieCard,
} as ComponentMeta<typeof MovieCard>

const Template: ComponentStory<typeof MovieCard> = (props) => {
    return (
        <div
            style={{
                backgroundColor: '#232323',
                width: '425px',
                padding: '10px',
            }}
        >
            <Provider store={store}>
                <StaticRouter location="/">
                    <MovieCard {...props} />
                </StaticRouter>
            </Provider>
        </div>
    )
}

export const Movie = Template.bind({})
Movie.args = { movie: movieMock }
