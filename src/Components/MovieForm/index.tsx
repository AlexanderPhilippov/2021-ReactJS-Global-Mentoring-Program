import React from 'react'
import { MovieFormProps } from './models'
import './styles.scss'

const AddMovieForm: React.FC<MovieFormProps> = ({action, movie}) => {
    return (
        <form className="movie-form">
            <div className="movie-form__container">
                <h2 className="movie-form__header">{action}</h2>
                <div className="movie-form__left-column">
                    <label>title</label>
                    <input placeholder="Movie title" defaultValue={movie?.title}/>
                </div>
                <div className="movie-form__right-column">
                    <label>release date</label>
                    <input type="date" placeholder="Select date" />
                </div>
                <div className="movie-form__left-column">
                    <label>movie url</label>
                    <input placeholder="https://" />
                </div>
                <div className="movie-form__right-column">
                    <label>rating</label>
                    <input
                        type="number"
                        min="0"
                        max="10"
                        step="0.5"
                        placeholder="7.8"
                    />
                </div>
                <div className="movie-form__left-column">
                    <label>genre</label>
                    <input placeholder="Select genre" />
                </div>
                <div className="movie-form__right-column">
                    <label>runtime</label>
                    <input placeholder="minutes" />
                </div>
                <div className="movie-form__description">
                    <label>overview</label>
                    <textarea placeholder="Movie description" />
                </div>
                <div className="movie-form__buttons">
                    <input type="submit" value="submit" />
                    <input type="reset" value="reset" />
                </div>
            </div>
        </form>
    )
}

export default AddMovieForm
