import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { SearchIcon } from "./icons/icon-search";

export const PrimaryInput = styled.input`
    width: 200px;
    border-radius: 8px;
    background: var(--bg-secundary);
    border: none;
    padding: 10px 16px;
    color: var(--text-dark);
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        line-height: 22px;
        width: 352px;
        font-size: 14px;
    }
`;

const InputContainer = styled.div`
    position: relative;
    width: 250px;
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        width: 352px;
    }
    
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput onChange={(event) => props.handleChange(event.target.value)}{...props} />
            <SearchIcon />
        </InputContainer>
    )
}