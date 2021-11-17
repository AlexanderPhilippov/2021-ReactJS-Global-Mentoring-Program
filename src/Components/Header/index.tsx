import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from 'Components'
import MovieForm from 'Components/MovieForm'
import SearchPanel from './SearchPanel'
import MovieDetailsPanel from './MovieDetailsPanel'
import { closeModal } from 'Components/Modal/actions'
import './styles.scss'
import { useLocation } from 'react-router-dom'

const Header: React.FC = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const movieIdFromQuery = searchParams.get('movie')
    const isSearch = !movieIdFromQuery

    const dispatch = useDispatch()
    useEffect(() => {
        !isSearch && dispatch(closeModal())
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
