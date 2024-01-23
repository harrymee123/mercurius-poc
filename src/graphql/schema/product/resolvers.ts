export const ProductResolvers = {
    options: async (parent: any, { id }: { id: number}) => {
        return id ? parent.options.filter((option: any) => option.id == id) : parent.options
    }
}
