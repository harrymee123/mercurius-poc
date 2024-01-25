export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Image = {
  __typename?: 'Image';
  altText?: Maybe<Scalars['String']['output']>;
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
  width: Scalars['Int']['output'];
};

export type MoneyV2 = {
  __typename?: 'MoneyV2';
  amount: Scalars['Int']['output'];
  currencyCode?: Maybe<Scalars['String']['output']>;
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PriceRange = {
  __typename?: 'PriceRange';
  maxVariantPrice: MoneyV2;
  minVariantPrice: MoneyV2;
};

export type Product = {
  __typename?: 'Product';
  availableForSale?: Maybe<Scalars['Boolean']['output']>;
  compareAtPriceRange: PriceRange;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  featuredImage: Image;
  handle?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isGiftCard?: Maybe<Scalars['Boolean']['output']>;
  metafield?: Maybe<Scalars['String']['output']>;
  metafields?: Maybe<Scalars['String']['output']>;
  onlineStoreUrl?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<Option>>>;
  priceRange: PriceRange;
  productType?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['String']['output']>;
  requiresSellingPlan?: Maybe<Scalars['Boolean']['output']>;
  seo: Seo;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  totalInventory: Scalars['Int']['output'];
  trackingParameters?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  variantBySelectedOptions: Variant;
  vendor?: Maybe<Scalars['String']['output']>;
};


export type ProductOptionsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  productList?: Maybe<Array<Maybe<Product>>>;
};

export type Seo = {
  __typename?: 'SEO';
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SelectedOption = {
  __typename?: 'SelectedOption';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Variant = {
  __typename?: 'Variant';
  availableForSale?: Maybe<Scalars['Boolean']['output']>;
  barcode?: Maybe<Scalars['String']['output']>;
  compareAtPrice: MoneyV2;
  currentlyNotInStock?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  image: Image;
  metafield?: Maybe<Scalars['String']['output']>;
  metafields?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  product: Product;
  quantityAvailable: Scalars['Int']['output'];
  requiresShipping?: Maybe<Scalars['Boolean']['output']>;
  selectedOptions?: Maybe<Array<SelectedOption>>;
  sku?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  unitPrice: MoneyV2;
  weight: Scalars['Int']['output'];
  weightUnit?: Maybe<Scalars['String']['output']>;
};
