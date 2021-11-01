import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from './actions'
import { isModalOpen } from './selectors'
import './styles.scss'

const Modal: React.FC = ({ children }) => {
    const isOpen = useSelector(isModalOpen)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset'
        if (document.body.offsetHeight > window.innerHeight) {
            document.body.style.paddingRight = isOpen ? '17px' : 'unset'
        }
    }, [isOpen])

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(closeModal())
    }

    return isOpen ? (
        <div className="modal">
            <input
                type="button"
                value="X"
                className="modal__close"
                onClick={handleClose}
            />
            {children}
        </div>
    ) : null
}

export default Modal
