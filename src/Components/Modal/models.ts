import React from 'react'

export interface ModalProps {
    isOpen: boolean
    closeAction: () => void
    Content: typeof React.Component | React.FC
}
