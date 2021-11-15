import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './Components/Footer'

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
            <div id="root">${html}</div>
        </body>
    </html>
    `
}
export default () => {
    return (
        req: unknown,
        res: {
            send: (html: string) => void
        }
    ): void => {
        const htmlString = ReactDOMServer.renderToString(<App />)
        res.send(renderHtml(htmlString))
    }
}
