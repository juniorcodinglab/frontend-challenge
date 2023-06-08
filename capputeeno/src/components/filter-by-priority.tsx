import styled from "styled-components"
import { ArrowIcon } from "./icon-arrow"
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";
import { setPriority } from "os";

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        font-family: inherit;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);
        cursor: pointer;

        border: none;
        background: none;

        display: flex;
        align-items: center;
        text-align: center;

    }

`;

const PriorityFilter = styled.ul`
    position: absolute;
    background: #FFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    width: 190px;

    top: 100%;

    li {
        list-style: none;
        color: var(--text-dark);
        font-weight: 400;
        padding: 4px 0;
        cursor: pointer;
    }
`;

export function FilterByPriority(props: FilterByPriorityProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => setIsOpen(prev => !prev);

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value);
        setIsOpen(false);
    }

    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por:
                <ArrowIcon />
            </button>

            {isOpen &&
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Maior - menor </li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>
            }

        </FilterContainer>
    )
}