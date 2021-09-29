import React from 'react'
import {
    ErrorBlockProps,
    ErrorBoundaryProps,
    ErrorBoundaryState,
} from './models'
import './styles.scss'

const ErrorBlock: React.FC<ErrorBlockProps> = ({ error }) => {
    return (
        <div className="error-boundary">
            <div className="error-boundary__body">
                <div className="error-boundary__title">
                    <h1>Something went wrong</h1>
                    <hr />
                    <div className="error-boundary__message">
                        <>{error?.message}</>
                        <>{error?.stack}</>
                    </div>
                </div>
            </div>
        </div>
    )
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            hasError: false,
            error: undefined,
        }
    }

    public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error }
    }

    render(): React.ReactNode {
        return this.state.hasError ? (
            <ErrorBlock error={this.state.error} />
        ) : (
            this.props.children
        )
    }
}

export default ErrorBoundary
