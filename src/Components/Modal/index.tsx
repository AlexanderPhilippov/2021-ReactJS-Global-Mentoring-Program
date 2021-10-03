import React from 'react'
import { ModalProps } from './models'
import './styles.scss'

const Modal: React.FC<ModalProps> = ({
    isOpen,
    closeAction,
    Content
}) => {
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
