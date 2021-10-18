import React, { useRef, useState } from 'react'
import { MovieActions } from './models'

const MovieCardMenu: React.FC<MovieActions> = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const timeOutId = useRef<number | null>(null)
    const timeOutValue = 400

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
        timeOutId.current = window.setTimeout(() => {
            setIsOpen(false)
            timeOutId.current = null
        }, timeOutValue) as unknown as number
    }

    const handleStopClose = () =>
        timeOutId.current && window.clearTimeout(timeOutId.current)

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
