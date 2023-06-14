"use client"

import styled, { StyledComponent } from 'styled-components';

import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from './primary-input';
import { CartControl } from './cart-control';
import { useFilter } from '@/hooks/useFilter';

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
    max-width: 1400px;
    margin: 0 auto;
    padding: 10px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;    
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        padding: 20px 160px;
    }
`;

const Logo = styled.a`
    color: #5D5D6D;
    font-weight: 400;
    line-height: 150%;
    font-size: 20px;
    padding: 0;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 40px;
    }
`;


export function Header(props: HeaderProps) {
    const {setSearch, search} = useFilter();
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon value={search} handleChange={setSearch} placeholder='Procurando por algo específico?' />
                <CartControl />
            </div>
        </TagHeader>
    )
}