import { useFormikContext } from 'formik'
import React from 'react'
import { FormikMovieModel } from './models'

const DeleteMovieFormBody: React.FC = () => {
    const { values } = useFormikContext<FormikMovieModel>()

    return (
        <>
            <div className="movie-form__message">
                Are you sure you want to delete&nbsp;
                <span className="movie-form__message_movie-title">
                    {values.title}
                </span>
                &nbsp;movie?
            </div>
            <div className="movie-form__buttons">
                <input type="submit" value="confirm" />
            </div>
        </>
    )
}

export default DeleteMovieFormBody
