import React, { useContext, useEffect } from 'react'
import HeaderTextLogo from './HeaderTextLogo'
import MovieDetails from 'Components/MovieDetails'
import SearchIcon from 'Assets/Images/search.png'
import { Context } from 'Components/Context'
import { useSelector } from 'react-redux'
import { AppState } from 'src/Store/rootReducer'
import { getMovieByIdSelector } from 'Components/MovieList/selectors'

const MovieDetailsPanel: React.FC = () => {
    const { context, setContext } = useContext(Context)
    const handleClick = () => {
        window.scrollTo({ top: context?.pageYOffset, behavior: 'smooth' })
        setContext()
    }

    const movie = useSelector((state: AppState) =>
        getMovieByIdSelector(state, context?.movieId)
    )

    useEffect(() => {
        if (!movie) setContext()
    }, [movie])

    return (
        <>
            <HeaderTextLogo />
            <img
                className="header__search-icon"
                src={SearchIcon}
                onClick={handleClick}
            />
            {movie && <MovieDetails {...movie} />}
        </>
    )
}

export default MovieDetailsPanel
