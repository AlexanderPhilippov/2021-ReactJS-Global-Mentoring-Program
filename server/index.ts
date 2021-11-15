import express from 'express'
import serverRenderer from '../src/serverRenderer'

const server = express()

server.get('/', (req, res) => {
    res.redirect('/search')
})

server.use(express.static('dist'))

server.use('/search/:genre?/:searchQuery?', serverRenderer())

server.listen(3000, () =>
    console.log('Server running on http://localhost:3000')
)
