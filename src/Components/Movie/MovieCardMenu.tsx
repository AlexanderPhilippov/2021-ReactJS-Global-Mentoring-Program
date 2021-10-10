import React, { useState } from 'react'
import { MovieActions } from './models'

const MovieCardMenu: React.FC<MovieActions> = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsOpen(true)
    }

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsOpen((prevState) => !prevState)
    }

    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation()
        props.handleEdit()
        setIsOpen((prevState) => !prevState)
    }

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation()
        props.handleDelete()
        setIsOpen((prevState) => !prevState)
    }

    return !isOpen ? (
        <div
            className="movie-card__menu_closed"
            onClick={handleOpen}
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
