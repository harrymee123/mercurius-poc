import { ProductQuery, ProductResolvers, ProductSchema } from './product/index'

export const schema = `
  type Query
  ${ProductSchema}
`

export const resolvers = {
  Query: {
    ...ProductQuery,
  },
  Product: ProductResolvers,
}
