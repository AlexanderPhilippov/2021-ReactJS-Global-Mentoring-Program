import React, { useContext, useEffect } from 'react'
import HeaderTextLogo from './HeaderTextLogo'
import MovieDetails from 'Components/MovieDetails'
import SearchIcon from 'Assets/Images/search.png'
import { Context } from 'Components/Context'
import { useSelector } from 'react-redux'
import { AppState } from 'src/Store/rootReducer'
import { getMovieByIdSelector } from 'Components/MovieList/selectors'
import { useHistory, useLocation } from 'react-router-dom'

const MovieDetailsPanel: React.FC = () => {
    const history = useHistory()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const { context, setContext } = useContext(Context)

    const clearMovieFromQuery = () => {
        searchParams.delete('movie')
        history.push({
            pathname: location.pathname,
            search: searchParams.toString(),
        })
    }
    const handleClick = () => {
        clearMovieFromQuery()
        window.scrollTo({ top: context?.pageYOffset, behavior: 'smooth' })
        setContext()
    }

    const movie = useSelector((state: AppState) =>
        getMovieByIdSelector(state, context?.movieId)
    )

    useEffect(() => {
        if (!movie) {
            clearMovieFromQuery()
            setContext()
        }
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
