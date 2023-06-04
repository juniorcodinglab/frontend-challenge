import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { SearchIcon } from "./icon-search";

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    background: var(--bg-secundary);
    border: none;
    padding: 10px 16px;
    color: var(--text-dark);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`;

const InputContainer = styled.div`
    position: relative;
    width: 352px;
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function PrimaryInputWSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput {...props} />
            <SearchIcon />
        </InputContainer>
    )
}