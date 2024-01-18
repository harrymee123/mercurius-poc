import { ProductQuery, ProductTypes } from './product/index'

import { gql } from 'mercurius-codegen'

export const typeDefs = gql`
  type Query
  ${ProductTypes}
`

export const resolvers = {
  Query: {
    ...ProductQuery,
  },
}
