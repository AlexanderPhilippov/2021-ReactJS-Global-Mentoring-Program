import React, { useContext } from 'react'
import HeaderTextLogo from './HeaderTextLogo'
import MovieDetails from 'Components/MovieDetails'
import SearchIcon from 'Assets/Images/search.png'
import { Context } from 'Components/Context'
import { MovieModel } from 'Components/Movie/models'

const MovieDetailsPanel: React.FC = () => {
    const { context, setContext } = useContext(Context)
    const handleClick = () => setContext()
    return (
        <>
            <HeaderTextLogo />
            <img
                className="header__search-icon"
                src={SearchIcon}
                onClick={handleClick}
            />
            <MovieDetails movie={context as MovieModel} />
        </>
    )
}

export default MovieDetailsPanel
