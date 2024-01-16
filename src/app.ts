import { resolvers, typeDefs } from './schema/index'

import Fastify from 'fastify'
import { codegenMercurius } from 'mercurius-codegen'
import mercurius from 'mercurius'

export const app = Fastify({
  logger: process.env.NODE_ENV !== 'test',
})

app.register(mercurius, {
  schema: typeDefs,
  resolvers,
})

codegenMercurius(app, {
  targetPath: './src/schema/generated.ts',
}).catch(console.error)

app.listen({ port: 8000 })
