import React, { useState } from 'react'
import { ErrorBoundary, Footer, Header, MovieList } from 'Components'
import { Context } from 'Components/Context'
import { Provider } from 'react-redux'
import store from './Store'

const App: React.FC = () => {
    const [context, setContext] = useState<number>()
    return (
        <>
            <Provider store={store}>
                <Context.Provider value={{ context, setContext }}>
                    <Header isSearch={!context} />
                    <ErrorBoundary>
                        <MovieList />
                    </ErrorBoundary>
                    <Footer />
                </Context.Provider>
            </Provider>
        </>
    )
}

export default App
