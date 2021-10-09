import React, { useState } from 'react'
import { Modal } from 'Components'
import { MovieFormAction } from 'Components/MovieForm/models'
import MovieForm from 'Components/MovieForm'
import SearchPanel from './SearchPanel'
import MovieDetailsPanel from './MovieDetailsPanel'
import './styles.scss'

const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSearchActive, setIsSearchActive] = useState(false)

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                closeAction={() => setIsModalOpen(false)}
            >
                <MovieForm action={MovieFormAction.ADD} />
            </Modal>
            <div className="header">
                {isSearchActive ? (
                    <SearchPanel modalToggle={setIsModalOpen} />
                ) : (
                    <MovieDetailsPanel closeAction={() => setIsSearchActive(true)} />
                )}
            </div>
        </>
    )
}

export default Header
