import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import movieMock from '../../../.storybook/movieMock.json'

import MovieDetails from '.'

export default {
    title: 'Application/MovieDetails',
    component: MovieDetails,
} as ComponentMeta<typeof MovieDetails>

const Template: ComponentStory<typeof MovieDetails> = (props) => {
    return (
        <div style={{ backgroundColor: '#232323', paddingLeft: '5em' }}>
            <MovieDetails {...props} />
        </div>
    )
}

export const Movie = Template.bind({})
Movie.args = movieMock
