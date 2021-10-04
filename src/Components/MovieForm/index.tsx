import React from 'react'
import AddEditMovieFormBody from './AddEditMovieFormBody'
import DeleteMovieFormBody from './DeleteMovieFormBody'
import { MovieFormAction, MovieFormProps } from './models'
import './styles.scss'

const MovieForm: React.FC<MovieFormProps> = ({ action, movie }) => {
    return (
        <form className="movie-form">
            <div className="movie-form__container">
                <h2 className="movie-form__header">{action}</h2>
                {action === MovieFormAction.DELETE ? (
                    <DeleteMovieFormBody />
                ) : (
                    <AddEditMovieFormBody movie={movie} />
                )}
            </div>
        </form>
    )
}

export default MovieForm
