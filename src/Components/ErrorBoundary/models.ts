import { ReactNode } from 'react'

export interface ErrorBoundaryProps {
    children: ReactNode
}

export interface ErrorBlockProps {
    error?: Error
}

export interface ErrorBoundaryState extends ErrorBlockProps {
    hasError: boolean
}
