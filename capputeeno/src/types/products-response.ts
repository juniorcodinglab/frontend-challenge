import { Product } from "./product"

export interface ProductsFechResponse {
    data: {
        allProducts: Product[]
    }
}