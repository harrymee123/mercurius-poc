"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypes = void 0;
exports.ProductTypes = `
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

 extend type Query {
    productList: [Product]
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZ3JhcGhxbC9zY2hlbWEvcHJvZHVjdC90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBdUYzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFByb2R1Y3RUeXBlcyA9IGBcbiAgdHlwZSBTRU8ge1xuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICB0aXRsZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIE9wdGlvbiB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmdcbiAgICB2YWx1ZXM6IFtTdHJpbmddXG4gIH1cblxuICB0eXBlIFNlbGVjdGVkT3B0aW9uIHtcbiAgICBuYW1lOiBTdHJpbmdcbiAgICB2YWx1ZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIEltYWdlIHtcbiAgICBhbHRUZXh0OiBTdHJpbmdcbiAgICBoZWlnaHQ6IEludCFcbiAgICBpZDogSW50IVxuICAgIHVybDogU3RyaW5nXG4gICAgd2lkdGg6IEludCFcbiAgfVxuXG4gIHR5cGUgTW9uZXlWMiB7XG4gICAgYW1vdW50OiBJbnQhXG4gICAgY3VycmVuY3lDb2RlOiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgUHJpY2VSYW5nZSB7XG4gICAgbWF4VmFyaWFudFByaWNlOiBNb25leVYyIVxuICAgIG1pblZhcmlhbnRQcmljZTogTW9uZXlWMiFcbiAgfVxuXG4gIHR5cGUgVmFyaWFudCB7XG4gICAgYXZhaWxhYmxlRm9yU2FsZTogQm9vbGVhblxuICAgIGJhcmNvZGU6IFN0cmluZ1xuICAgIGNvbXBhcmVBdFByaWNlOiBNb25leVYyIVxuICAgIGN1cnJlbnRseU5vdEluU3RvY2s6IEJvb2xlYW5cbiAgICBpZDogSW50IVxuICAgIGltYWdlOiBJbWFnZSFcbiAgICBtZXRhZmllbGQ6IFN0cmluZ1xuICAgIG1ldGFmaWVsZHM6IFN0cmluZ1xuICAgIHByaWNlOiBJbnQhXG4gICAgcHJvZHVjdDogUHJvZHVjdCFcbiAgICBxdWFudGl0eUF2YWlsYWJsZTogSW50IVxuICAgIHJlcXVpcmVzU2hpcHBpbmc6IEJvb2xlYW5cbiAgICBzZWxlY3RlZE9wdGlvbnM6IFtTZWxlY3RlZE9wdGlvbiFdXG4gICAgc2t1OiBTdHJpbmdcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgdW5pdFByaWNlOiBNb25leVYyIVxuICAgIHdlaWdodDogSW50IVxuICAgIHdlaWdodFVuaXQ6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBQcm9kdWN0IHtcbiAgICBhdmFpbGFibGVGb3JTYWxlOiBCb29sZWFuXG4gICAgY29tcGFyZUF0UHJpY2VSYW5nZTogUHJpY2VSYW5nZSFcbiAgICBjcmVhdGVkQXQ6IFN0cmluZ1xuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICBkZXNjcmlwdGlvbkh0bWw6IFN0cmluZ1xuICAgIGZlYXR1cmVkSW1hZ2U6IEltYWdlIVxuICAgIGhhbmRsZTogU3RyaW5nXG4gICAgaWQ6IEludCFcbiAgICBpc0dpZnRDYXJkOiBCb29sZWFuXG4gICAgbWV0YWZpZWxkOiBTdHJpbmdcbiAgICBtZXRhZmllbGRzOiBTdHJpbmdcbiAgICBvbmxpbmVTdG9yZVVybDogU3RyaW5nXG4gICAgb3B0aW9uczogW09wdGlvbiFdXG4gICAgcHJpY2VSYW5nZTogUHJpY2VSYW5nZSFcbiAgICBwcm9kdWN0VHlwZTogU3RyaW5nXG4gICAgcHVibGlzaGVkQXQ6IFN0cmluZ1xuICAgIHJlcXVpcmVzU2VsbGluZ1BsYW46IEJvb2xlYW5cbiAgICBzZW86IFNFTyFcbiAgICB0YWdzOiBbU3RyaW5nXVxuICAgIHRpdGxlOiBTdHJpbmdcbiAgICB0b3RhbEludmVudG9yeTogSW50IVxuICAgIHRyYWNraW5nUGFyYW1ldGVyczogU3RyaW5nXG4gICAgdXBkYXRlZEF0OiBTdHJpbmdcbiAgICB2YXJpYW50QnlTZWxlY3RlZE9wdGlvbnM6IFZhcmlhbnQhXG4gICAgdmVuZG9yOiBTdHJpbmdcbiAgfVxuXG4gZXh0ZW5kIHR5cGUgUXVlcnkge1xuICAgIHByb2R1Y3RMaXN0OiBbUHJvZHVjdF1cbiAgfVxuYFxuIl19