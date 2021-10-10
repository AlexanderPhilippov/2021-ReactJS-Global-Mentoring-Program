import React, { useContext } from 'react'
import HeaderTextLogo from './HeaderTextLogo'
import MovieDetails from 'Components/MovieDetails'
import SearchIcon from 'Assets/Images/search.png'
import { Context } from 'Components/Context'
import { MovieModel } from 'Components/Movie/models'

const MovieDetailsPanel: React.FC = () => {
    const { context, setContext } = useContext(Context)
    return (
        <>
            <HeaderTextLogo />
            <img
                className="header__search-icon"
                src={SearchIcon}
                onClick={() => setContext({})}
            />
            <MovieDetails movie={context as MovieModel} />
        </>
    )
}

export default MovieDetailsPanel
