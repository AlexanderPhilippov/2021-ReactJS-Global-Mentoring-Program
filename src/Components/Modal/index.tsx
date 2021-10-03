import React, { useEffect } from 'react'
import { ModalProps } from './models'
import './styles.scss'

const Modal: React.FC<ModalProps> = ({ isOpen, closeAction, Content }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return isOpen ? (
        <div className="modal">
            <input
                type="button"
                value="X"
                className="modal__close"
                onClick={closeAction}
            />
            <Content />
        </div>
    ) : null
}

export default Modal
