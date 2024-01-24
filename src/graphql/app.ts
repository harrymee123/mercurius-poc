import { codegenMercurius, gql } from 'mercurius-codegen'
import { resolvers, typeDefs } from './schema/index'

import Fastify from 'fastify'
import mercurius from 'mercurius'

export const app = Fastify({
  logger: process.env.NODE_ENV !== 'test',
})

app.register(mercurius, {
  schema: typeDefs,
  resolvers,
  path: '/'
})

codegenMercurius(app, {
  targetPath: './src/graphql/generated.ts',
}).catch(console.error)

export default app
