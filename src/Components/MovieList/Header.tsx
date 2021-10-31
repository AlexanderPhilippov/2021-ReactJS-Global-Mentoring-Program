import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { SortOrder } from './models'
import { setMoviesGenre, setSortBy } from './actions'
import * as Selectors from './selectors'

const GenreLink: React.FC<{
    name: string
    isSelected?: boolean
}> = ({ name, isSelected }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setMoviesGenre(name))
    }
    return (
        <div
            className={classnames('movie-list-header__genre-link', {
                active: isSelected,
            })}
            onClick={handleClick}
        >
            {name || 'all'}
        </div>
    )
}
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
    const genre = searchParams.get('genre') || ''
    const totalAmount = useSelector(Selectors.getTotalAmountSelector)

    const dispatch = useDispatch()

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        dispatch(setSortBy(e.currentTarget.value))
    }

    const handleChangeSortOrder = () => {
        searchParams.set(
            'sortOrder',
            sortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC
        )
        history.push({
            pathname: location.pathname,
            search: `?${searchParams.toString()}`,
        })
    }
    return (
        <div className="movie-list-header">
            <div className="movie-list-header__genres">
                {genres.map((genreName) => {
                    return (
                        <GenreLink
                            key={genreName}
                            name={genreName}
                            isSelected={genreName === genre}
                        />
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
                    <option value="genres">genre</option>
                    <option value="vote_average">rating</option>
                    <option value="release_date">release date</option>
                </select>
            </div>
            <div className="movie-list-header__total">
                <span>{totalAmount}</span>&nbsp;movies found
            </div>
        </div>
    )
}

export { MoviesHeader }
