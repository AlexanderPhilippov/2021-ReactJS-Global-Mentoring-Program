import React, { useEffect, useState } from 'react'
import { Modal } from 'Components'
import { MovieFormAction } from 'Components/MovieForm/models'
import MovieForm from 'Components/MovieForm'
import SearchPanel from './SearchPanel'
import MovieDetailsPanel from './MovieDetailsPanel'
import './styles.scss'

const Header: React.FC<{ isSearch: boolean }> = ({ isSearch }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        !isSearch && setIsModalOpen(false)
    }, [isSearch])

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                closeAction={() => setIsModalOpen(false)}
            >
                <MovieForm action={MovieFormAction.ADD} />
            </Modal>
            <div className="header">
                {isSearch ? (
                    <SearchPanel modalToggle={setIsModalOpen} />
                ) : (
                    <MovieDetailsPanel />
                )}
            </div>
        </>
    )
}

export default Header
