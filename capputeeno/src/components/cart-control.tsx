import { useLocalStorage } from "@/hooks/uselocalStorage";
import { CartIcon } from "./icons/icon-cart";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    background: var(--color-delete);
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 2px;
    box-sizing: content-box;

    font-size: 10px;

    position: absolute;
    top: 10px;
    left: 30px;
`;

const Container = styled.div`
    position: relative;

    padding: 0 20px ;
`;

export function CartControl() {
    const { value } = useLocalStorage('cart-items');

    return (
        <Container>
            <CartIcon />
            <CartCount>7</CartCount>
        </Container>
    )
}