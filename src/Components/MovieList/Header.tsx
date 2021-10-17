import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { SortOrder } from './models'
import { setMoviesGenre, setSortBy, setSortOrder } from './actions'
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
        'documentary',
        'comedy',
        'horror',
        'crime',
        'Drama',
        'Animation',
    ]

    const sortOrder = useSelector(Selectors.getSortOrderSelector)
    const genre = useSelector(Selectors.getGenreSelector)
    const totalAmount = useSelector(Selectors.getTotalAmountSelector)

    const dispatch = useDispatch()

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        dispatch(setSortBy(e.currentTarget.value))
    }

    const handleChangeSortOrder = () => {
        dispatch(
            setSortOrder(
                sortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC
            )
        )
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
