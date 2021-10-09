import React from 'react'
import HeaderTextLogo from './HeaderTextLogo'
import MovieDetails from 'Components/MovieDetails'
import SearchIcon from 'Assets/Images/search.png'
import { MovieDetailsPanelProps } from './models'

const MovieDetailsPanel: React.FC<MovieDetailsPanelProps> = ({closeAction}) => {
    return (
        <>
            <HeaderTextLogo />
            <img className="header__search-icon" src={SearchIcon} onClick={closeAction} />
            <MovieDetails />
        </>
    )
}

export default MovieDetailsPanel
