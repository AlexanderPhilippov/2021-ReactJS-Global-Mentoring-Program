import React, { useState } from 'react'
import { MovieActions } from './models'

const MovieCardMenu: React.FC<MovieActions> = ({
    handleEdit,
    handleDelete,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return !isOpen ? (
        <div
            className="movie-card__menu_closed"
            onClick={() => setIsOpen(true)}
        ></div>
    ) : (
        <div className="movie-card__menu_opened">
            <div onClick={() =>{handleEdit(); setIsOpen(false)}}>Edit</div>
            <div onClick={() => {handleDelete(); setIsOpen(false)}}>Delete</div>
            <div onClick={() => setIsOpen(false)}>Close menu</div>
        </div>
    )
}

export default MovieCardMenu
