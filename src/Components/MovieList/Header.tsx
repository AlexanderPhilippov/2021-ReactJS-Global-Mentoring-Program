import React from 'react'
import { MoviesHeaderProps } from './models'

const MoviesHeader: React.FC<MoviesHeaderProps> = ({total}) => {
    return (
        <div className="movie-list-header">
            <div className="movie-list-header__genres">
                <div>all</div>
                <div>documentary</div>
                <div>comedy</div>
                <div>horror</div>
                <div>crime</div>
            </div>
            <div className="movie-list-header__sorting">
                <div>sort by</div>
                <select>
                    <option selected>release date</option>
                    <option>other</option>
                </select>
            </div>
            <div className="movie-list-header__total"><span>{total || 0}</span>&nbsp;movies found</div>
        </div>
    )
}

export {MoviesHeader}
