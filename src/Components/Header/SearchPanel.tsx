import image from 'Assets/Images/movies-tiles.jpg'
import { openAddMovieModal } from 'Components/Modal/actions'
import React, { useRef } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import HeaderTextLogo from './HeaderTextLogo'
import './styles.scss'

const SearchPanel: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null)
    const { genre, searchQuery } =
        useParams<{ genre: string; searchQuery: string }>()
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const searchParams = new URLSearchParams(location.search)

    const handleClick = () => {
        history.push({
            pathname: `/search/${genre || 'All'}/${ref.current?.value || ''}`,
            search: searchParams.toString(),
        })
    }
    const handleAddMovie = () => {
        dispatch(openAddMovieModal())
    }

    return (
        <>
            <img className="header__image" src={image} alt="header image" />
            <HeaderTextLogo />
            <input
                className="header__add-movie_button"
                type="button"
                value="+ add movie"
                onClick={handleAddMovie}
            />
            <div className="header__search">
                <label htmlFor="searchMovieInput">Find your movie</label>
                <input
                    id="searchMovieInput"
                    type="text"
                    placeholder="What do you want to watch?"
                    defaultValue={searchQuery || ''}
                    ref={ref}
                />
                <input type="button" value="search" onClick={handleClick} />
            </div>
        </>
    )
}

export default SearchPanel
