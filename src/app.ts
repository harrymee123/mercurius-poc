import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { resolvers, typeDefs } from './schema/index'

import mercurius from 'mercurius'

export const app = Fastify({
  logger: process.env.NODE_ENV !== 'test',
})

const buildContext = async (req: FastifyRequest, _reply: FastifyReply) => {
  return {
    authorization: req.headers.authorization,
  }
}

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T

declare module 'mercurius' {
  interface MercuriusContext
    extends PromiseType<ReturnType<typeof buildContext>> {}
}

app.register(mercurius, {
  schema: typeDefs,
  resolvers,
  context: buildContext,
  subscription: true,
})

app.listen({ port: 8000 })
