import React from 'react'
import { ErrorBoundary, Footer, Header, MovieList } from 'Components'

const App: React.FC = () => {
    return (
        <>
            <Header />
            <ErrorBoundary>
                <MovieList />
            </ErrorBoundary>
            <Footer />
        </>
    )
}

export default App
