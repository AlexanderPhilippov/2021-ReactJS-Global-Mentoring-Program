import React from 'react'

const DeleteMovieFormBody: React.FC = () => {
    return (
        <>
            <div className="movie-form__message">
                Are you sure you want to delete this movie?
            </div>
            <div className="movie-form__buttons">
                <input type="submit" value="confirm" />
            </div>
        </>
    )
}

export default DeleteMovieFormBody
