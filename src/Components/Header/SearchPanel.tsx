import image from 'Assets/Images/movies-tiles.jpg'
import { setSearchValue } from 'Components/MovieList/actions'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import HeaderTextLogo from './HeaderTextLogo'
import { SearchPanelProps } from './models'
import './styles.scss'

const SearchPanel: React.FC<SearchPanelProps> = ({ modalToggle }) => {
    const ref = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setSearchValue(ref.current?.value || ''))
    }

    return (
        <>
            <img className="header__image" src={image} />
            <HeaderTextLogo />
            <input
                className="header__add-movie_button"
                type="button"
                value="+ add movie"
                onClick={() => modalToggle((prevState) => !prevState)}
            />
            <div className="header__search">
                <label htmlFor="searchMovieInput">Find your movie</label>
                <input
                    id="searchMovieInput"
                    type="text"
                    placeholder="What do you want to watch?"
                    ref={ref}
                />
                <input type="button" value="search" onClick={handleClick} />
            </div>
        </>
    )
}

export default SearchPanel
