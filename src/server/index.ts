import { Server } from 'socket.io'
import { env } from '../common/envUtils'
import { EventsToClient, EventsToServer } from '../types/socket'

const io = new Server<EventsToServer, EventsToClient>()

io.on('connection', (socket) => {
  console.log(`Socket ${socket.id} attempting to connect`)

  const disconnectTimeout = setTimeout(() => {
    console.log(`Socket ${socket.id} didn't authorize in time`)
    socket.disconnect(true)
  }, 15e3)

  socket.on('AUTHORIZE', (token, fn) => {
    clearTimeout(disconnectTimeout)

    if (token !== env.token) {
      console.log(`Socket ${socket.id} incorrect token`)
      return socket.disconnect(true)
    }

    console.log(`Socket ${socket.id} authorized successfully`)

    fn()
  })
})

io.listen(3000)
