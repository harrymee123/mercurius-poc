import { ProductQuery, ProductResolvers, ProductTypes } from './product'

import { gql } from 'mercurius-codegen'

export const typeDefs = gql`
  type Query
  ${ProductTypes}
`

export const resolvers = {
  Query: {
    ...ProductQuery,
  },
  Product: ProductResolvers,
}
