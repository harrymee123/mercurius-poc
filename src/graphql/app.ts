import { resolvers, schema } from './schema/index'

import Fastify from 'fastify'
import mercurius from 'mercurius'

export const app = Fastify({
  logger: process.env.NODE_ENV !== 'test',
})

app.register(mercurius, {
  schema,
  resolvers,
  path: '/'
})

export default app
