import React, { useState } from 'react'
import classnames from 'classnames'
import { MoviesHeaderProps } from './models'

const GenreLink: React.FC<{
    name: string
    isSelected?: boolean
    selectGenre: (value: string) => void
}> = ({ name, isSelected, selectGenre }) => {
    return (
        <div
            className={classnames('movie-list-header__genre-link', {
                active: isSelected,
            })}
            onClick={() => selectGenre(name)}
        >
            {name}
        </div>
    )
}
const MoviesHeader: React.FC<MoviesHeaderProps> = ({ total }) => {
    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime']
    const [selectedGenre, setSelectedGenre] = useState(genres[0])

    return (
        <div className="movie-list-header">
            <div className="movie-list-header__genres">
                {genres.map((genre) => {
                    return (
                        <GenreLink
                            key={genre}
                            name={genre}
                            selectGenre={setSelectedGenre}
                            isSelected={selectedGenre === genre}
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
