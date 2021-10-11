import React, { useState } from 'react'
import { ErrorBoundary, Footer, Header, MovieList } from 'Components'
import { MovieModel } from 'Components/Movie/models'
import { Context } from 'Components/Context'

const App: React.FC = () => {
    const [context, setContext] = useState<MovieModel>()
    return (
        <>
            <Context.Provider value={{ context, setContext }}>
                <Header isSearch={!context?.id} />
                <ErrorBoundary>
                    <MovieList />
                </ErrorBoundary>
                <Footer />
            </Context.Provider>
        </>
    )
}

export default App
