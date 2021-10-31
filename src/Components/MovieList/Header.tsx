import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useHistory, NavLink } from 'react-router-dom'
import { SortOrder } from './models'
import * as Selectors from './selectors'

const MoviesHeader: React.FC = () => {
    const genres = [
        '',
        'Documentary',
        'Comedy',
        'Horror',
        'Crime',
        'Drama',
        'Animation',
    ]
    const location = useLocation()
    const history = useHistory()
    const searchParams = new URLSearchParams(location.search)
    const sortOrder = searchParams.get('sortOrder') || 'desc'
    const sortBy = searchParams.get('sortBy') || 'genres'
    const genre = searchParams.get('genre') || ''
    const totalAmount = useSelector(Selectors.getTotalAmountSelector)

    const pushToHistory = () => {
        history.push({
            pathname: location.pathname,
            search: searchParams.toString(),
        })
    }

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        searchParams.set('sortBy', e.currentTarget.value)
        pushToHistory()
    }

    const handleChangeSortOrder = () => {
        searchParams.set(
            'sortOrder',
            sortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC
        )
        pushToHistory()
    }

    const By = {
        genre: 'genres',
        vote: 'vote_average',
        release: 'release_date',
    }

    return (
        <div className="movie-list-header">
            <div className="movie-list-header__genres">
                {genres.map((genreName) => {
                    return (
                        <NavLink
                            key={genreName}
                            to={`${genreName && `?genre=${genreName}`}`}
                            className="movie-list-header__genre-link"
                            isActive={() => genreName === genre}
                        >
                            {genreName || 'All'}
                        </NavLink>
                    )
                })}
            </div>
            <div className="movie-list-header__sorting">
                <div className="">
                    sort by
                    <span
                        onClick={handleChangeSortOrder}
                        className="movie-list-header__sorting_order"
                    >
                        ({sortOrder})
                    </span>
                </div>
                <select onChange={handleChange}>
                    <option value={By.genre} selected={sortBy === By.genre}>
                        genre
                    </option>
                    <option value={By.vote} selected={sortBy === By.vote}>
                        rating
                    </option>
                    <option value={By.release} selected={sortBy === By.release}>
                        release date
                    </option>
                </select>
            </div>
            <div className="movie-list-header__total">
                <span>{totalAmount}</span>&nbsp;movies found
            </div>
        </div>
    )
}

export { MoviesHeader }
