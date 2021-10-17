import React, { useRef, useState } from 'react'
import { MovieActions } from './models'

const MovieCardMenu: React.FC<MovieActions> = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<NodeJS.Timeout | null>()

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsOpen((prevState) => !prevState)
    }

    const handleEdit = (e: React.MouseEvent) => {
        handleClose(e)
        props.handleEdit()
    }

    const handleDelete = (e: React.MouseEvent) => {
        handleClose(e)
        props.handleDelete()
    }

    const handleCloseWithDelay = () => {
        ref.current = setTimeout(() => {
            setIsOpen(false)
            ref.current = null
        }, 400)
    }

    const handleStopClose = () => ref.current && clearTimeout(ref.current)

    return !isOpen ? (
        <div
            className="movie-card__menu_closed"
            onMouseEnter={handleOpen}
        ></div>
    ) : (
        <div
            className="movie-card__menu_opened"
            onMouseLeave={handleCloseWithDelay}
            onMouseEnter={handleStopClose}
        >
            <div onClick={handleEdit}>Edit</div>
            <div onClick={handleDelete}>Delete</div>
            <div onClick={handleClose}>Close menu</div>
        </div>
    )
}

export default MovieCardMenu
