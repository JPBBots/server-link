import { FastifyPluginCallback } from 'fastify'

export const loadRoutes: FastifyPluginCallback = (app, options, done) => {
  app.get('/stats', (req, res) => {
    res.send({ sucess: true })
  })

  done()
}
