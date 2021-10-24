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
import { MoviesRoute, useCreateUrl, useFetch } from 'Utils'
import { MovieModel } from 'Components/Movie/models'

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
        switch (action) {
            case MovieFormAction.ADD:
                useFetch<MovieModel>(useCreateUrl(MoviesRoute), {
                    method: 'POST',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: values.title,
                        release_date: values.release_date,
                        poster_path: values.poster_path,
                        vote_average: Number(values.vote_average),
                        genres: values.genres.split(','),
                        runtime: Number(values.runtime),
                        overview: values.overview,
                    }),
                })
                    .then(() => {
                        console.log('Movie Added')
                    })
                    .catch((e: Error) => {
                        console.log('Something went wrong:', e.message)
                    })
                break
            case MovieFormAction.EDIT:
                useFetch<MovieModel>(useCreateUrl(MoviesRoute), {
                    method: 'PUT',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: Number(values.id),
                        title: values.title,
                        release_date: values.release_date,
                        poster_path: values.poster_path,
                        vote_average: Number(values.vote_average),
                        genres: values.genres.split(','),
                        runtime: Number(values.runtime),
                        overview: values.overview,
                    }),
                })
                    .then(() => {
                        console.log('Edit success')
                    })
                    .catch((e: Error) => {
                        console.log('Something went wrong:', e.message)
                    })
                break
            case MovieFormAction.DELETE:
                useFetch<null>(useCreateUrl(`${MoviesRoute}/${values.id}`), {
                    method: 'DELETE',
                })
                    .then(() => {
                        console.log('DELETE success')
                    })
                    .catch((e: Error) => {
                        console.log('Something went wrong:', e.message)
                    })
                break
        }
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
