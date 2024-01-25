export const ProductSchema = `
extend type Query {
  productList: [Product]
}

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
  options(id: Int): [Option]
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
`