import React from 'react'
import { MovieProps } from './models'

const Movie: React.FC<MovieProps> = props => {
    console.log('props', props)
    return(
        <>
            <div>It is Movie Component</div>
        </>
    )
}

export default Movie
