const express = require('express')

const server = express()

server.get('/', (req: unknown, res: { redirect: (url: string) => void }) => {
    res.redirect('/search')
})

server.use(express.static('dist'))

server.get('/search', (req: unknown, res: { send: (html: string) => void }) => {
    res.send(require('../src/serverRenderer'))
})

server.listen(3000, () =>
    console.log('Server running on http://localhost:3000')
)
