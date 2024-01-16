import type { GraphQLResolveInfo } from 'graphql'
import type { MercuriusContext } from 'mercurius'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) =>
  | Promise<import('mercurius-codegen').DeepPartial<TResult>>
  | import('mercurius-codegen').DeepPartial<TResult>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  _FieldSet: any
}

export type Query = {
  __typename?: 'Query'
  productList?: Maybe<Array<Maybe<Product>>>
}

export type SEO = {
  __typename?: 'SEO'
  description?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type Option = {
  __typename?: 'Option'
  id: Scalars['Int']
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SelectedOption = {
  __typename?: 'SelectedOption'
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type Image = {
  __typename?: 'Image'
  altText?: Maybe<Scalars['String']>
  height: Scalars['Int']
  id: Scalars['Int']
  url?: Maybe<Scalars['String']>
  width: Scalars['Int']
}

export type MoneyV2 = {
  __typename?: 'MoneyV2'
  amount: Scalars['Int']
  currencyCode?: Maybe<Scalars['String']>
}

export type PriceRange = {
  __typename?: 'PriceRange'
  maxVariantPrice: MoneyV2
  minVariantPrice: MoneyV2
}

export type Variant = {
  __typename?: 'Variant'
  availableForSale?: Maybe<Scalars['Boolean']>
  barcode?: Maybe<Scalars['String']>
  compareAtPrice: MoneyV2
  currentlyNotInStock?: Maybe<Scalars['Boolean']>
  id: Scalars['Int']
  image: Image
  metafield?: Maybe<Scalars['String']>
  metafields?: Maybe<Scalars['String']>
  price: Scalars['Int']
  product: Product
  quantityAvailable: Scalars['Int']
  requiresShipping?: Maybe<Scalars['Boolean']>
  selectedOptions?: Maybe<Array<SelectedOption>>
  sku?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  unitPrice: MoneyV2
  weight: Scalars['Int']
  weightUnit?: Maybe<Scalars['String']>
}

export type Product = {
  __typename?: 'Product'
  availableForSale?: Maybe<Scalars['Boolean']>
  compareAtPriceRange: PriceRange
  createdAt?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  featuredImage: Image
  handle?: Maybe<Scalars['String']>
  id: Scalars['Int']
  isGiftCard?: Maybe<Scalars['Boolean']>
  metafield?: Maybe<Scalars['String']>
  metafields?: Maybe<Scalars['String']>
  onlineStoreUrl?: Maybe<Scalars['String']>
  options?: Maybe<Array<Option>>
  priceRange: PriceRange
  productType?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['String']>
  requiresSellingPlan?: Maybe<Scalars['Boolean']>
  seo: SEO
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  title?: Maybe<Scalars['String']>
  totalInventory: Scalars['Int']
  trackingParameters?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['String']>
  variantBySelectedOptions: Variant
  vendor?: Maybe<Scalars['String']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  SEO: ResolverTypeWrapper<SEO>
  String: ResolverTypeWrapper<Scalars['String']>
  Option: ResolverTypeWrapper<Option>
  Int: ResolverTypeWrapper<Scalars['Int']>
  SelectedOption: ResolverTypeWrapper<SelectedOption>
  Image: ResolverTypeWrapper<Image>
  MoneyV2: ResolverTypeWrapper<MoneyV2>
  PriceRange: ResolverTypeWrapper<PriceRange>
  Variant: ResolverTypeWrapper<Variant>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Product: ResolverTypeWrapper<Product>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  SEO: SEO
  String: Scalars['String']
  Option: Option
  Int: Scalars['Int']
  SelectedOption: SelectedOption
  Image: Image
  MoneyV2: MoneyV2
  PriceRange: PriceRange
  Variant: Variant
  Boolean: Scalars['Boolean']
  Product: Product
}

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  productList?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Product']>>>,
    ParentType,
    ContextType
  >
}

export type SEOResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['SEO'] = ResolversParentTypes['SEO']
> = {
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type OptionResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Option'] = ResolversParentTypes['Option']
> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  values?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SelectedOptionResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['SelectedOption'] = ResolversParentTypes['SelectedOption']
> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ImageResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']
> = {
  altText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MoneyV2Resolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['MoneyV2'] = ResolversParentTypes['MoneyV2']
> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  currencyCode?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PriceRangeResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['PriceRange'] = ResolversParentTypes['PriceRange']
> = {
  maxVariantPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>
  minVariantPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type VariantResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Variant'] = ResolversParentTypes['Variant']
> = {
  availableForSale?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  compareAtPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>
  currentlyNotInStock?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  image?: Resolver<ResolversTypes['Image'], ParentType, ContextType>
  metafield?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  metafields?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>
  quantityAvailable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  requiresShipping?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  selectedOptions?: Resolver<
    Maybe<Array<ResolversTypes['SelectedOption']>>,
    ParentType,
    ContextType
  >
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  unitPrice?: Resolver<ResolversTypes['MoneyV2'], ParentType, ContextType>
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  weightUnit?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ProductResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
  availableForSale?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  compareAtPriceRange?: Resolver<
    ResolversTypes['PriceRange'],
    ParentType,
    ContextType
  >
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  descriptionHtml?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  featuredImage?: Resolver<ResolversTypes['Image'], ParentType, ContextType>
  handle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  isGiftCard?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  metafield?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  metafields?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  onlineStoreUrl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  options?: Resolver<
    Maybe<Array<ResolversTypes['Option']>>,
    ParentType,
    ContextType
  >
  priceRange?: Resolver<ResolversTypes['PriceRange'], ParentType, ContextType>
  productType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  publishedAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  requiresSellingPlan?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  seo?: Resolver<ResolversTypes['SEO'], ParentType, ContextType>
  tags?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  totalInventory?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  trackingParameters?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  variantBySelectedOptions?: Resolver<
    ResolversTypes['Variant'],
    ParentType,
    ContextType
  >
  vendor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = MercuriusContext> = {
  Query?: QueryResolvers<ContextType>
  SEO?: SEOResolvers<ContextType>
  Option?: OptionResolvers<ContextType>
  SelectedOption?: SelectedOptionResolvers<ContextType>
  Image?: ImageResolvers<ContextType>
  MoneyV2?: MoneyV2Resolvers<ContextType>
  PriceRange?: PriceRangeResolvers<ContextType>
  Variant?: VariantResolvers<ContextType>
  Product?: ProductResolvers<ContextType>
}

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj
    params: TParams
  }>,
  context: TContext & {
    reply: import('fastify').FastifyReply
  }
) => Promise<Array<import('mercurius-codegen').DeepPartial<TReturn>>>
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>
      opts?: {
        cache?: boolean
      }
    }
export interface Loaders<
  TContext = import('mercurius').MercuriusContext & {
    reply: import('fastify').FastifyReply
  }
> {
  SEO?: {
    description?: LoaderResolver<Maybe<Scalars['String']>, SEO, {}, TContext>
    title?: LoaderResolver<Maybe<Scalars['String']>, SEO, {}, TContext>
  }

  Option?: {
    id?: LoaderResolver<Scalars['Int'], Option, {}, TContext>
    name?: LoaderResolver<Maybe<Scalars['String']>, Option, {}, TContext>
    values?: LoaderResolver<
      Maybe<Array<Maybe<Scalars['String']>>>,
      Option,
      {},
      TContext
    >
  }

  SelectedOption?: {
    name?: LoaderResolver<
      Maybe<Scalars['String']>,
      SelectedOption,
      {},
      TContext
    >
    value?: LoaderResolver<
      Maybe<Scalars['String']>,
      SelectedOption,
      {},
      TContext
    >
  }

  Image?: {
    altText?: LoaderResolver<Maybe<Scalars['String']>, Image, {}, TContext>
    height?: LoaderResolver<Scalars['Int'], Image, {}, TContext>
    id?: LoaderResolver<Scalars['Int'], Image, {}, TContext>
    url?: LoaderResolver<Maybe<Scalars['String']>, Image, {}, TContext>
    width?: LoaderResolver<Scalars['Int'], Image, {}, TContext>
  }

  MoneyV2?: {
    amount?: LoaderResolver<Scalars['Int'], MoneyV2, {}, TContext>
    currencyCode?: LoaderResolver<
      Maybe<Scalars['String']>,
      MoneyV2,
      {},
      TContext
    >
  }

  PriceRange?: {
    maxVariantPrice?: LoaderResolver<MoneyV2, PriceRange, {}, TContext>
    minVariantPrice?: LoaderResolver<MoneyV2, PriceRange, {}, TContext>
  }

  Variant?: {
    availableForSale?: LoaderResolver<
      Maybe<Scalars['Boolean']>,
      Variant,
      {},
      TContext
    >
    barcode?: LoaderResolver<Maybe<Scalars['String']>, Variant, {}, TContext>
    compareAtPrice?: LoaderResolver<MoneyV2, Variant, {}, TContext>
    currentlyNotInStock?: LoaderResolver<
      Maybe<Scalars['Boolean']>,
      Variant,
      {},
      TContext
    >
    id?: LoaderResolver<Scalars['Int'], Variant, {}, TContext>
    image?: LoaderResolver<Image, Variant, {}, TContext>
    metafield?: LoaderResolver<Maybe<Scalars['String']>, Variant, {}, TContext>
    metafields?: LoaderResolver<Maybe<Scalars['String']>, Variant, {}, TContext>
    price?: LoaderResolver<Scalars['Int'], Variant, {}, TContext>
    product?: LoaderResolver<Product, Variant, {}, TContext>
    quantityAvailable?: LoaderResolver<Scalars['Int'], Variant, {}, TContext>
    requiresShipping?: LoaderResolver<
      Maybe<Scalars['Boolean']>,
      Variant,
      {},
      TContext
    >
    selectedOptions?: LoaderResolver<
      Maybe<Array<SelectedOption>>,
      Variant,
      {},
      TContext
    >
    sku?: LoaderResolver<Maybe<Scalars['String']>, Variant, {}, TContext>
    title?: LoaderResolver<Maybe<Scalars['String']>, Variant, {}, TContext>
    unitPrice?: LoaderResolver<MoneyV2, Variant, {}, TContext>
    weight?: LoaderResolver<Scalars['Int'], Variant, {}, TContext>
    weightUnit?: LoaderResolver<Maybe<Scalars['String']>, Variant, {}, TContext>
  }

  Product?: {
    availableForSale?: LoaderResolver<
      Maybe<Scalars['Boolean']>,
      Product,
      {},
      TContext
    >
    compareAtPriceRange?: LoaderResolver<PriceRange, Product, {}, TContext>
    createdAt?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>
    description?: LoaderResolver<
      Maybe<Scalars['String']>,
      Product,
      {},
      TContext
    >
    descriptionHtml?: LoaderResolver<
      Maybe<Scalars['String']>,
      Product,
      {},
      TContext
    >
    featuredImage?: LoaderResolver<Image, Product, {}, TContext>
    handle?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>
    id?: LoaderResolver<Scalars['Int'], Product, {}, TContext>
    isGiftCard?: LoaderResolver<
      Maybe<Scalars['Boolean']>,
      Product,
      {},
      TContext
    >
    metafield?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>
    metafields?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>
    onlineStoreUrl?: LoaderResolver<
      Maybe<Scalars['String']>,
      Product,
      {},
      TContext
    >
    options?: LoaderResolver<Maybe<Array<Option>>, Product, {}, TContext>
    priceRange?: LoaderResolver<PriceRange, Product, {}, TContext>
    productType?: LoaderResolver<
      Maybe<Scalars['String']>,
      Product,
      {},
      TContext
    >
    publishedAt?: LoaderResolver<
      Maybe<Scalars['String']>,
      Product,
      {},
      TContext
    >
    requiresSellingPlan?: LoaderResolver<
      Maybe<Scalars['Boolean']>,
      Product,
      {},
      TContext
    >
    seo?: LoaderResolver<SEO, Product, {}, TContext>
    tags?: LoaderResolver<
      Maybe<Array<Maybe<Scalars['String']>>>,
      Product,
      {},
      TContext
    >
    title?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>
    totalInventory?: LoaderResolver<Scalars['Int'], Product, {}, TContext>
    trackingParameters?: LoaderResolver<
      Maybe<Scalars['String']>,
      Product,
      {},
      TContext
    >
    updatedAt?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>
    variantBySelectedOptions?: LoaderResolver<Variant, Product, {}, TContext>
    vendor?: LoaderResolver<Maybe<Scalars['String']>, Product, {}, TContext>
  }
}
declare module 'mercurius' {
  interface IResolvers
    extends Resolvers<import('mercurius').MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
