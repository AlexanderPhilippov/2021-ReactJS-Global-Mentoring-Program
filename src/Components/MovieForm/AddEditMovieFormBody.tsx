/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEventHandler } from 'react'
import classNames from 'classnames'
import { FormikErrors, FormikTouched, useFormikContext, Field } from 'formik'
import { FormikMovieModel, MovieModel } from 'Components/Movie/models'

const AddEditMovieFormBody: React.FC = () => {
    const { touched, errors, isSubmitting, values } =
        useFormikContext<FormikMovieModel>()

    return (
        <>
            <div className="movie-form__left-column">
                <label>
                    title
                    {touched.title && errors.title && `- ${errors.title}`}
                </label>
                <Field
                    placeholder="Movie title"
                    name="title"
                    className={classNames({
                        hasError: touched.title && errors.title,
                    })}
                />
            </div>
            <div className="movie-form__right-column">
                <label>
                    release date
                    {touched.release_date &&
                        errors.release_date &&
                        `- ${errors.release_date}`}
                </label>
                <Field
                    type="date"
                    placeholder="Select date"
                    name="release_date"
                    className={classNames({
                        hasError: touched.release_date && errors.release_date,
                    })}
                />
            </div>
            <div className="movie-form__left-column">
                <label>
                    movie url
                    {touched.poster_path &&
                        errors.poster_path &&
                        `- ${errors.poster_path}`}
                </label>
                <Field
                    placeholder="https://"
                    name="poster_path"
                    className={classNames({
                        hasError: touched.poster_path && errors.poster_path,
                    })}
                />
            </div>
            <div className="movie-form__right-column">
                <label>
                    rating
                    {touched.vote_average &&
                        errors.vote_average &&
                        `- ${errors.vote_average}`}
                </label>
                <Field
                    name="vote_average"
                    className={classNames({
                        hasError: touched.vote_average && errors.vote_average,
                    })}
                />
            </div>
            <div className="movie-form__left-column">
                <label>
                    genres
                    {touched.genres && errors.genres && `- ${errors.genres}`}
                </label>
                <Field
                    placeholder="Select genre"
                    name="genres"
                    className={classNames({
                        hasError: touched.genres && errors.genres,
                    })}
                />
            </div>
            <div className="movie-form__right-column">
                <label>
                    runtime
                    {touched.runtime && errors.runtime && `- ${errors.runtime}`}
                </label>
                <Field
                    placeholder="minutes"
                    name="runtime"
                    className={classNames({
                        hasError: touched.runtime && errors.runtime,
                    })}
                />
            </div>
            <div className="movie-form__description">
                <label>
                    overview
                    {touched.overview &&
                        errors.overview &&
                        `- ${errors.overview}`}
                </label>
                <Field
                    component="textarea"
                    placeholder="Movie description"
                    name="overview"
                    className={classNames({
                        hasError: touched.overview && errors.overview,
                    })}
                />
            </div>
            <div className="movie-form__buttons">
                <input type="submit" value="submit" disabled={isSubmitting} />
                <input type="reset" value="reset" disabled={isSubmitting} />
            </div>
        </>
    )
}

export default AddEditMovieFormBody
