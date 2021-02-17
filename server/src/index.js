import express from 'express'
import {} from 'dotenv/config'
import http from 'http'
import WebSocket from 'ws'
import bodyParser from 'body-parser'

import routes from './routes'
const PORT = process.env.PORT || 3030

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

app.use(bodyParser.json())

wss.on('connection', (ws) => {})

app.use('/api', routes)

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
