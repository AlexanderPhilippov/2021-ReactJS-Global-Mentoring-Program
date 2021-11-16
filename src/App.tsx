import React, { useState } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import {
    ErrorBoundary,
    Footer,
    Header,
    MovieList,
    PageNotFound,
} from 'Components'
import { Context, movieContextModel } from 'Components/Context'

const App: React.FC = () => {
    const [context, setContext] = useState<movieContextModel>()
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/search" />
                </Route>
                <Route path="/search/:genre?/:searchQuery?">
                    <Context.Provider value={{ context, setContext }}>
                        <Header />
                        <ErrorBoundary>
                            <MovieList />
                        </ErrorBoundary>
                    </Context.Provider>
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}

export default App
