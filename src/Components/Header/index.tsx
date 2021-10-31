import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from 'Components'
import MovieForm from 'Components/MovieForm'
import SearchPanel from './SearchPanel'
import MovieDetailsPanel from './MovieDetailsPanel'
import { closeModal } from 'Components/Modal/actions'
import './styles.scss'
import { Context } from 'Components/Context'
import { useLocation } from 'react-router-dom'

const Header: React.FC = () => {
    const { context, setContext } = useContext(Context)
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const movieIdFromQuery = searchParams.get('movie')
    const isSearch = !context?.movieId && !movieIdFromQuery

    const dispatch = useDispatch()
    useEffect(() => {
        !isSearch && dispatch(closeModal())
        if (!context?.movieId && movieIdFromQuery) {
            setContext({ movieId: Number(movieIdFromQuery) })
        }
    }, [isSearch])

    return (
        <>
            <Modal>
                <MovieForm />
            </Modal>
            <div className="header">
                {isSearch ? <SearchPanel /> : <MovieDetailsPanel />}
            </div>
        </>
    )
}

export default Header
