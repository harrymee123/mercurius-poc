import { Product, ProductOptionsArgs } from "./types"

export const ProductResolvers = {
    options: async (parent: Product, { id }: ProductOptionsArgs) => {
        return id ? parent.options?.filter((option: any) => option.id == id) : parent.options
    }
}
