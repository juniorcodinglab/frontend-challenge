"use client"

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./products-card";
import styled from "styled-components";

interface ProductsListProps {

}

const ListContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
`

export function ProductsList(props: ProductsListProps) {
    const {data} = useProducts();

    console.log(data);

    return (
        <ListContainer>
            {data?.map(product => 
                <ProductCard 
                    key={product.id}
                    title={product.name}
                    price={product.price_in_cents}
                    image={product.image_url}   
                />
            )}
        </ListContainer>
    )

}