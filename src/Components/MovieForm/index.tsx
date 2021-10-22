import React from 'react'
import { Form, Formik } from 'formik'
import AddEditMovieFormBody from './AddEditMovieFormBody'
import DeleteMovieFormBody from './DeleteMovieFormBody'
import { FormikMovieModel } from 'Components/Movie/models'
import { MovieFormAction, MovieFormProps } from './models'
import validationRules from './validationRules'
import './styles.scss'

const MovieForm: React.FC<MovieFormProps> = ({ action, movie }) => {
    const initialValues: FormikMovieModel = {
        id: movie?.id,
        title: movie?.title || '',
        release_date: movie?.release_date || '',
        poster_path: movie?.poster_path || '',
        vote_average: movie?.vote_average?.toString() || '',
        genres: movie?.genres?.join(',') || '',
        runtime: movie?.runtime?.toString() || '',
        overview: movie?.overview || '',
    }

    const handleSubmit = (values: FormikMovieModel) => {
        console.log('Submit', values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={validationRules}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className="movie-form__container">
                    <h2 className="movie-form__header">{action}</h2>
                    {action === MovieFormAction.DELETE ? (
                        <DeleteMovieFormBody />
                    ) : (
                        <AddEditMovieFormBody />
                    )}
                </div>
            </Form>
        </Formik>
    )
}

export default MovieForm
