import React from 'react'
import { Form, Formik } from 'formik'
import AddEditMovieFormBody from './AddEditMovieFormBody'
import DeleteMovieFormBody from './DeleteMovieFormBody'
import { FormikMovieModel, MovieFormAction } from './models'
import validationRules from './validationRules'
import './styles.scss'
import { useSelector } from 'react-redux'
import {
    getCurrentModalFormAction,
    getSelectedMovieIdForm,
} from 'Components/Modal/selectors'
import { AppState } from 'src/Store/rootReducer'
import { getMovieByIdSelector } from 'Components/MovieList/selectors'

const MovieForm: React.FC = () => {
    const movieId = useSelector(getSelectedMovieIdForm)
    const action = useSelector(getCurrentModalFormAction)
    const movie = useSelector((state: AppState) =>
        getMovieByIdSelector(state, movieId)
    )

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
            enableReinitialize
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
