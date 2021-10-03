import React from 'react'
import { MovieFormProps } from './models'
import './styles.scss'

const MovieForm: React.FC<MovieFormProps> = ({action, movie}) => {
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
                    <input type="date" placeholder="Select date" defaultValue={movie?.release_date}/>
                </div>
                <div className="movie-form__left-column">
                    <label>movie url</label>
                    <input placeholder="https://" defaultValue={movie?.poster_path}/>
                </div>
                <div className="movie-form__right-column">
                    <label>rating</label>
                    <input defaultValue={movie?.vote_average} />
                </div>
                <div className="movie-form__left-column">
                    <label>genre</label>
                    <input placeholder="Select genre" defaultValue={movie?.genres}/>
                </div>
                <div className="movie-form__right-column">
                    <label>runtime</label>
                    <input placeholder="minutes" defaultValue={movie?.runtime}/>
                </div>
                <div className="movie-form__description">
                    <label>overview</label>
                    <textarea placeholder="Movie description" defaultValue={movie?.overview}/>
                </div>
                <div className="movie-form__buttons">
                    <input type="submit" value="submit" />
                    <input type="reset" value="reset" />
                </div>
            </div>
        </form>
    )
}

export default MovieForm
