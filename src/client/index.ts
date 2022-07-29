import { io, Socket } from 'socket.io-client'
import { env } from '../common/envUtils'
import { EventsToClient, EventsToServer } from '../types/socket'

import fastify from 'fastify'
import { loadRoutes } from './routes'

const app = fastify()

app.register(loadRoutes)

const server = io(env.url) as Socket<EventsToClient, EventsToServer>

server.on('connect', () => {
  console.log(`Authorizing as ${server.id}`)
  server.emit('AUTHORIZE', env.token, () => {
    console.log('Authorized successfully')
  })
})

app.listen({ port: 3001 })
