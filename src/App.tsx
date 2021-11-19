import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import {
    ErrorBoundary,
    Footer,
    Header,
    MovieList,
    PageNotFound,
} from 'Components'

const App: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/search" />
                </Route>
                <Route path="/search/:genre?/:searchQuery?">
                    <Header />
                    <ErrorBoundary>
                        <MovieList />
                    </ErrorBoundary>
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
