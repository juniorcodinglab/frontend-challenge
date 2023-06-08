"use client"

import styled, { StyledComponent } from 'styled-components';

import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from './primary-input';
import { CartControl } from './cart-control';

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
});

interface HeaderProps {


}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    max-width: 1400px;
    margin: 0 auto;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;    
    }
`;

const Logo = styled.a`
    color: #5D5D6D;
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`;

export function Header(props: HeaderProps) {
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder='Producrando por algo específico?' />
                <CartControl />
            </div>
        </TagHeader>
    )
}