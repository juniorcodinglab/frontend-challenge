import styled from "styled-components"

interface ProductsCardProps {
    image: string,
    title: string,
    price: number,
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #00000039;
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;
    
    img {
        width: 256px;
        height: 300px;
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: val(--text-dark);
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: val(--text-dark);
    }

    > div {
        width: 228px;
        height: 1px;
        background: var(--bg-secundary);
        margin: 8px 0;
    }
`

export function ProductCard(props: ProductsCardProps) {

    function formatPrice(valueInCent) {
        const valueInReal = valueInCent / 100;
        return valueInReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }
    return (
        <Card>
            <img src={props.image} alt="a" />
            <h3>{props.title}</h3>
            <div></div>
            <p>{formatPrice(props.price)}</p>
        </Card>
    )
}