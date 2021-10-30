import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'
import {
    ErrorBoundary,
    Footer,
    Header,
    MovieList,
    PageNotFound,
} from 'Components'
import { Context, movieContextModel } from 'Components/Context'
import { Provider } from 'react-redux'
import store from './Store'

const App: React.FC = () => {
    const [context, setContext] = useState<movieContextModel>()
    return (
        <>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/search" />
                        </Route>
                        <Route path="/search">
                            <Context.Provider value={{ context, setContext }}>
                                <Header isSearch={!context?.movieId} />
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
                </Router>
            </Provider>
        </>
    )
}

export default App
