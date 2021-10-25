import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Modal } from 'Components'
import MovieForm from 'Components/MovieForm'
import SearchPanel from './SearchPanel'
import MovieDetailsPanel from './MovieDetailsPanel'
import { closeModal } from 'Components/Modal/actions'
import './styles.scss'

const Header: React.FC<{ isSearch: boolean }> = ({ isSearch }) => {
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
