import React from 'react'
import { Form, Formik } from 'formik'
import AddEditMovieFormBody from './AddEditMovieFormBody'
import DeleteMovieFormBody from './DeleteMovieFormBody'
import { FormikMovieModel, MovieFormAction } from './models'
import validationRules, { noValidate } from './validationRules'
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import {
    getCurrentModalFormAction,
    getSelectedMovieIdForm,
} from 'Components/Modal/selectors'
import { AppState } from 'src/Store/rootReducer'
import { getMovieByIdSelector } from 'Components/MovieList/selectors'
import { MoviesRoute, useCreateUrl, useFetch } from 'Utils'
import { MovieModel } from 'Components/Movie/models'
import { closeModal } from 'Components/Modal/actions'
import { setRefreshRequired } from 'Components/MovieList/actions'

const MovieForm: React.FC = () => {
    const dispatch = useDispatch()
    const movieId = useSelector(getSelectedMovieIdForm)
    const action = useSelector(getCurrentModalFormAction)
    const movie = useSelector((state: AppState) =>
        getMovieByIdSelector(state, movieId)
    )

    const validate =
        action === MovieFormAction.DELETE ? noValidate : validationRules

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

    const valuesToBody = (values: FormikMovieModel, isIdRequired = true) => {
        const data = {
            title: values.title,
            release_date: values.release_date,
            poster_path: values.poster_path,
            vote_average: Number(values.vote_average),
            genres: values.genres.split(','),
            runtime: Number(values.runtime),
            overview: values.overview,
        }
        return JSON.stringify(
            isIdRequired ? { ...data, id: Number(values.id) } : data
        )
    }
    const handleSubmit = (values: FormikMovieModel) => {
        const cache = 'no-cache'
        const headers = {
            'Content-Type': 'application/json',
        }
        switch (action) {
            case MovieFormAction.ADD:
                useFetch<MovieModel>(useCreateUrl(MoviesRoute), {
                    method: 'POST',
                    cache,
                    headers,
                    body: valuesToBody(values, false),
                }).then((movie) => {
                    dispatch(closeModal())
                    dispatch(setRefreshRequired(`new movie added ${movie.id}`))
                })
                break
            case MovieFormAction.EDIT:
                useFetch<MovieModel>(useCreateUrl(MoviesRoute), {
                    method: 'PUT',
                    cache,
                    headers,
                    body: valuesToBody(values),
                }).then(() => {
                    dispatch(closeModal())
                    dispatch(
                        setRefreshRequired(
                            `movie with id ${
                                values.id
                            } was edited. sequence number: ${Math.random().toString()}`
                        )
                    )
                })
                break
            case MovieFormAction.DELETE:
                useFetch(useCreateUrl(`${MoviesRoute}/${values.id}`), {
                    method: 'DELETE',
                }).then(() => {
                    dispatch(closeModal())
                    dispatch(
                        setRefreshRequired(
                            `movie with id ${values.id} successfuly removed`
                        )
                    )
                })
                break
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
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
