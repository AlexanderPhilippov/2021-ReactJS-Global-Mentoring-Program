import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './Store'
import { MoviesRoute, useCreateUrl } from 'Utils'
import {
    MoviesResponseModel,
    SearchBy,
    SortBy,
    SortOrder,
} from 'Components/MovieList/models'
import fetch from 'node-fetch'
import {
    fetchMoviesError,
    fetchMoviesSuccess,
} from 'Components/MovieList/actions'

const renderHtml = (html: string) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>EPAM React JS Global Mentoring Programm 2021</title>
            <script defer src="/vendors-node_modules_babel_polyfill_lib_index_js-node_modules_classnames_index_js-node_module-b8abcb.js"></script>
            <script defer src="/main.js"></script>
            <link href="/main.css" rel="stylesheet">
            </head>
            <body>
            <div id="root"><pre>${html}</pre></div>
            </body>
    </html>
    `
}
export default () => {
    return (
        req: { url: string },
        res: {
            send: (html: string) => void
        }
    ): void => {
        const defaultLimit = '12'
        const params: Record<string, string> = {
            sortBy: SortBy.GENRE,
            sortOrder: SortOrder.DESC,
            search: '',
            searchBy: SearchBy.TITLE,
            filter: '',
            limit: defaultLimit,
            offset: '',
        }
        const apiUrl: string = useCreateUrl(MoviesRoute, params).toString()
        fetch(apiUrl)
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        store.dispatch(
                            fetchMoviesSuccess(data as MoviesResponseModel)
                        )
                        render(JSON.stringify(data))
                    })
                } else {
                    store.dispatch(fetchMoviesError(response.statusText))
                    render(response.statusText)
                }
            })
            .catch((error) => {
                store.dispatch(fetchMoviesError(error.toString()))
                render(error.toString())
            })
        const render = (data: string) => {
            const htmlString = ReactDOMServer.renderToString(
                <StaticRouter location={req.url}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </StaticRouter>
            )
            res.send(renderHtml(htmlString))
        }
    }
}
