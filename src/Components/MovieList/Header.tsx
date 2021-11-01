import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useHistory, NavLink, useParams } from 'react-router-dom'
import { SortBy, SortOrder } from './models'
import * as Selectors from './selectors'

const MoviesHeader: React.FC = () => {
    const genres = [
        'All',
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
    const sortOrder = searchParams.get('sortOrder') || SortOrder.DESC
    const sortBy = searchParams.get('sortBy') || SortBy.GENRE
    const { genre, searchQuery } =
        useParams<{ genre: string; searchQuery: string }>()
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
                {genres.map((genreName) => {
                    return (
                        <NavLink
                            key={genreName}
                            to={`/search/${genreName}/${
                                searchQuery || ''
                            }?${searchParams.toString()}`}
                            className="movie-list-header__genre-link"
                            isActive={() => genreName === (genre || 'All')}
                        >
                            {genreName}
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
                    <option value={SortBy.GENRE}>genre</option>
                    <option value={SortBy.VOTE}>rating</option>
                    <option value={SortBy.RELEASE}>release date</option>
                </select>
            </div>
            <div className="movie-list-header__total">
                <span>{totalAmount}</span>&nbsp;movies found
            </div>
        </div>
    )
}

export { MoviesHeader }
