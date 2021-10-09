import MovieForm from 'Components/MovieForm'
import { Modal } from 'Components'
import React, { useState } from 'react'
import { MovieFormAction } from 'Components/MovieForm/models'
import './styles.scss'
import SearchPanel from './SearchPanel'

const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                closeAction={() => setIsModalOpen(false)}
            >
                <MovieForm action={MovieFormAction.ADD} />
            </Modal>
            <div className="header">
                <SearchPanel modalToggle={setIsModalOpen}/>
            </div>
        </>
    )
}

export default Header
