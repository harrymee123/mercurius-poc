import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { codegenMercurius, gql } from 'mercurius-codegen'
import mercurius, { IResolvers } from 'mercurius'

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

const schema = gql`
  type SEO {
    description: String
    title: String
  }

  type Option {
    id: Int!
    name: String
    values: [String]
  }

  type SelectedOption {
    name: String
    value: String
  }

  type Image {
    altText: String
    height: Int!
    id: Int!
    url: String
    width: Int!
  }

  type MoneyV2 {
    amount: Int!
    currencyCode: String
  }

  type PriceRange {
    maxVariantPrice: MoneyV2!
    minVariantPrice: MoneyV2!
  }

  type Variant {
    availableForSale: Boolean
    barcode: String
    compareAtPrice: MoneyV2!
    currentlyNotInStock: Boolean
    id: Int!
    image: Image!
    metafield: String
    metafields: String
    price: Int!
    product: Product!
    quantityAvailable: Int!
    requiresShipping: Boolean
    selectedOptions: [SelectedOption!]
    sku: String
    title: String
    unitPrice: MoneyV2!
    weight: Int!
    weightUnit: String
  }

  type Product {
    availableForSale: Boolean
    compareAtPriceRange: PriceRange!
    createdAt: String
    description: String
    descriptionHtml: String
    featuredImage: Image!
    handle: String
    id: Int!
    isGiftCard: Boolean
    metafield: String
    metafields: String
    onlineStoreUrl: String
    options: [Option!]
    priceRange: PriceRange!
    productType: String
    publishedAt: String
    requiresSellingPlan: Boolean
    seo: SEO!
    tags: [String]
    title: String
    totalInventory: Int!
    trackingParameters: String
    updatedAt: String
    variantBySelectedOptions: Variant!
    vendor: String
  }

  type Query {
    Products: [Product!]!
  }
`

const products = [
  {
    availableForSale: true,
    compareAtPriceRange: {
      maxVariantPrice: {
        amount: 10,
        currencyCode: 'GBP',
      },
      minVariantPrice: {
        amount: 1,
        currencyCode: 'GBP',
      },
    },
    createdAt: '2019-09-07T15:50:00Z',
    description: 'Description',
    descriptionHtml: '<p>Description</p>',
    featuredImage: {
      altText: 'Alt Text',
      height: 100,
      id: 1,
      url: 'https://google.com',
      width: 100,
    },
    handle: 'some_product',
    id: 1,
    isGiftCard: false,
    metafield: '?',
    metafields: '?',
    onlineStoreUrl: 'https://google.com',
    options: [
      {
        id: 1,
        name: 'option',
        values: ['value', 'another value'],
      },
    ],
    priceRange: {
      maxVariantPrice: {
        amount: 10,
        currencyCode: 'GBP',
      },
      minVariantPrice: {
        amount: 1,
        currencyCode: 'GBP',
      },
    },
    productType: 'Product Type',
    publishedAt: '2019-09-07T15:50:00Z',
    requiresSellingPlan: false,
    seo: {
      description: 'meta description',
      title: 'seo title',
    },
    tags: ['tag', 'another tag'],
    title: 'title',
    totalInventory: 100,
    trackingParameters: 'tracking=urlparams',
    updatedAt: '2019-09-07T15:50:00Z',
    variantBySelectedOptions: {
      availableForSale: true,
      barcode: 'barcode',
      compareAtPrice: {
        amount: 10,
        currencyCode: 'GBP',
      },
      currentlyNotInStock: false,
      id: 2,
      image: {
        altText: 'Alt Text',
        height: 100,
        id: 1,
        url: 'https://google.com',
        width: 100,
      },
      metafield: '?',
      metafields: '?',
      price: 5,
      product: {
        id: 1,
      },
      quantityAvailable: 5,
      requiresShipping: false,
      selectedOptions: [
        {
          name: 'optionName',
          value: 'optionValue',
        },
      ],
      sku: 'PRODUCT_SKU',
      title: 'Variant Title',
      unitPrice: {
        amount: 10,
        currencyCode: 'GBP',
      },
      weight: 100,
      weightUnit: 'GRAMS',
    },
    vendor: 'Vendor Name',
  },
]

const resolvers: IResolvers = {
  Query: {
    Products() {
      return products
    },
  },
}

app.register(mercurius, {
  schema,
  resolvers,
  context: buildContext,
  subscription: true,
})

codegenMercurius(app, {
  targetPath: './src/graphql/generated.ts',
  operationsGlob: './src/graphql/operations/*.gql',
}).catch(console.error)
