import image from 'Assets/Images/movies-tiles.jpg'
import React from 'react'
import HeaderTextLogo from './HeaderTextLogo'
import { SearchPanelProps } from './models'
import './styles.scss'

const SearchPanel: React.FC<SearchPanelProps> = ({ modalToggle }) => {
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
                />
                <input type="button" value="search" />
            </div>
        </>
    )
}

export default SearchPanel
