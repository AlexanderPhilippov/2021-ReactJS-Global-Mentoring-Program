import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useHistory, NavLink, useParams } from 'react-router-dom'
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
    const By = {
        genre: 'genres',
        vote: 'vote_average',
        release: 'release_date',
    }
    const location = useLocation()
    const history = useHistory()
    const searchParams = new URLSearchParams(location.search)
    const sortOrder = searchParams.get('sortOrder') || SortOrder.DESC
    const sortBy = searchParams.get('sortBy') || By.genre
    const { genre } = useParams<{ genre: string }>() || ''
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

    return (
        <div className="movie-list-header">
            <div className="movie-list-header__genres">
                {genres.map((genreName, index) => {
                    return (
                        <NavLink
                            key={genreName}
                            to={`/search/${genreName}?${searchParams.toString()}`}
                            className="movie-list-header__genre-link"
                            isActive={() =>
                                genreName === genre || (!genre && index == 0)
                            }
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
                <select onChange={handleChange} defaultValue={sortBy}>
                    <option value={By.genre}>genre</option>
                    <option value={By.vote}>rating</option>
                    <option value={By.release}>release date</option>
                </select>
            </div>
            <div className="movie-list-header__total">
                <span>{totalAmount}</span>&nbsp;movies found
            </div>
        </div>
    )
}

export { MoviesHeader }
