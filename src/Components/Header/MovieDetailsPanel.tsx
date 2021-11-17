import React, { useEffect } from 'react'
import HeaderTextLogo from './HeaderTextLogo'
import MovieDetails from 'Components/MovieDetails'
import SearchIcon from 'Assets/Images/search.png'
import { useSelector } from 'react-redux'
import { AppState } from 'src/Store/rootReducer'
import { getMovieByIdSelector } from 'Components/MovieList/selectors'
import { useHistory, useLocation, Link } from 'react-router-dom'

const MovieDetailsPanel: React.FC = () => {
    const history = useHistory()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const movieId = Number(searchParams.get('movie'))

    const clearMovieFromQuery = () => {
        searchParams.delete('movie')
        history.push({
            pathname: location.pathname,
            search: searchParams.toString(),
        })
    }

    searchParams.delete('movie')
    const linkTo = `${location.pathname}?${searchParams.toString()}`

    const movie = useSelector((state: AppState) =>
        getMovieByIdSelector(state, movieId)
    )

    useEffect(() => {
        if (!movie) {
            clearMovieFromQuery()
        }
    }, [movie])

    return (
        <>
            <HeaderTextLogo />
            <Link to={linkTo}>
                <img className="header__search-icon" src={SearchIcon} />
            </Link>
            {movie && <MovieDetails {...movie} />}
        </>
    )
}

export default MovieDetailsPanel
