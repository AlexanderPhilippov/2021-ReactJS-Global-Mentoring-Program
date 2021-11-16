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
import { APP_INIT_STORE_STATE } from 'Utils/constants'
import manifiest from '../dist/manifest.json'
import { Footer, PageNotFound } from 'Components'

const renderHtml = (html: string, storeState: string) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>EPAM React JS Global Mentoring Programm 2021</title>
            <script async id="${APP_INIT_STORE_STATE}">window.${APP_INIT_STORE_STATE}=${storeState}</script>
            <script defer src=${manifiest['vendors.js']}></script>
            <script defer src=${manifiest['main.js']}></script>
            <link href=${manifiest['main.css']} rel="stylesheet">
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
    </html>
    `
}

export const renderNotFoundPage = () => {
    return (
        req: {
            url: string
        },
        res: {
            status: (code: number) => void
            send: (html: string) => void
        }
    ): void => {
        const htmlString = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <Provider store={store}>
                    <PageNotFound />
                    <Footer />
                </Provider>
            </StaticRouter>
        )
        res.status(404)
        res.send(renderHtml(htmlString, JSON.stringify(store.getState())))
    }
}
export default () => {
    return (
        req: {
            url: string
            params: { genre: string; searchQuery: string }
            query: { sortBy: string; sortOrder: string; searchBy: string }
        },
        res: {
            send: (html: string) => void
        }
    ): void => {
        const { genre, searchQuery } = req.params
        const { sortBy, sortOrder, searchBy } = req.query

        const defaultLimit = '12'
        const params: Record<string, string> = {
            sortBy: sortBy || SortBy.GENRE,
            sortOrder: sortOrder || SortOrder.DESC,
            search: searchQuery || '',
            searchBy: searchBy || SearchBy.TITLE,
            filter: genre === 'All' ? '' : genre,
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
                        render()
                    })
                } else {
                    store.dispatch(fetchMoviesError(response.statusText))
                    render()
                }
            })
            .catch((error) => {
                store.dispatch(fetchMoviesError(error.toString()))
                render()
            })
        const render = () => {
            const searchParams = new URLSearchParams(req.query).toString()
            const clientUrl = `/search/${genre || 'All'}/${
                searchQuery ? `${searchQuery}/` : ''
            }${searchParams ? `?${searchParams}` : ''}`
            const htmlString = ReactDOMServer.renderToString(
                <StaticRouter location={clientUrl}>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </StaticRouter>
            )
            res.send(renderHtml(htmlString, JSON.stringify(store.getState())))
        }
    }
}
