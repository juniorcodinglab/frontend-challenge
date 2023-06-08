import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;

    button {
        font-family: inherit;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        border: none;
        background: none;

        display: flex;
        align-items: center;
        text-align: center;

    }

`;



export function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType />
            <FilterByPriority />
        </FilterContainer>

    );
}