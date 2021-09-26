import React from 'react'
import { Header, Footer, MovieList, ErrorBoundary } from 'Components'

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
