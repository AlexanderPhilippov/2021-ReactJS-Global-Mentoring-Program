import React, { useState } from 'react'
import { MovieActions } from './models'

const MovieCardMenu: React.FC<MovieActions> = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleEdit = () => {
        props.handleEdit()
        handleClose()
    }

    const handleDelete = () => {
        props.handleDelete()
        handleClose()
    }

    return !isOpen ? (
        <div
            className="movie-card__menu_closed"
            onClick={() => setIsOpen(true)}
        ></div>
    ) : (
        <div className="movie-card__menu_opened">
            <div onClick={handleEdit}>Edit</div>
            <div onClick={handleDelete}>Delete</div>
            <div onClick={handleClose}>Close menu</div>
        </div>
    )
}

export default MovieCardMenu
