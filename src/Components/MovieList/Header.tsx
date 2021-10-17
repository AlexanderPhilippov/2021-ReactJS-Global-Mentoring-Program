import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { MovieListFilterState, MoviesHeaderProps } from './models'
import { setMoviesGenre } from './actions'
import { AppState } from 'src/Store/rootReducer'

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
const MoviesHeader: React.FC<MoviesHeaderProps> = ({ total }) => {
    const genres = ['', 'documentary', 'comedy', 'horror', 'crime']
    const { genre } = useSelector(
        (state: AppState): MovieListFilterState => state.filter
    )

    return (
        <div className="movie-list-header">
            <div className="movie-list-header__genres">
                {genres.map((genreName) => {
                    return (
                        <GenreLink
                            key={genreName || 'all'}
                            name={genreName}
                            isSelected={genreName === genre}
                        />
                    )
                })}
            </div>
            <div className="movie-list-header__sorting">
                <div>sort by</div>
                <select>
                    <option>release date</option>
                    <option>other</option>
                </select>
            </div>
            <div className="movie-list-header__total">
                <span>{total || 0}</span>&nbsp;movies found
            </div>
        </div>
    )
}

export { MoviesHeader }
