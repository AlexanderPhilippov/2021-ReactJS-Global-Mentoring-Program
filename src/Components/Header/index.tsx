import MovieForm from 'Components/MovieForm'
import { Modal } from 'Components'
import image from 'Assets/Images/movies-tiles.jpg'
import React, { useState } from 'react'
import { MovieFormAction } from 'Components/MovieForm/models'
import './styles.scss'

const Header: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <>
            <Modal
                isOpen={isModalVisible}
                closeAction={() => setIsModalVisible(false)}
                Content={() => MovieForm({action: MovieFormAction.ADD})}
            />
            <div className="header">
                <img className="header__image" src={image} />
                <div className="header__text-logo">
                    <span>netflix</span>roulette
                </div>
                <input
                    className="header__add-movie_button"
                    type="button"
                    value="+ add movie"
                    onClick={() => setIsModalVisible(!isModalVisible)}
                />
                <div className="header__search">
                    <label htmlFor="searchMovieInput">Find your movie</label>
                    <input
                        id="searchMovieInput"
                        type="text"
                        placeholder="What do you want to watch?"
                    />
                    <input type="button" value="search" />
                </div>
            </div>
        </>
    )
}

export default Header
