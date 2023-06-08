import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components"

interface FilterByTypeProps {
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 40px;
    width: 100%;
`

const FilterItem = styled.li<FilterByTypeProps>`
    font-family: inherit;
    font-style: normal;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 16px;
    line-height: 22px;

    text-align: center;
    text-transform: uppercase;
    color: var(--text-dark);

    list-style: none;
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid var(--orange-light)' : 'none'};
`;

export function FilterByType(props: FilterByTypeProps) {
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
    }

    return (
        <FilterList>
            <FilterItem
                selected={type === FilterType.ALL}
                onClick={() => handleChangeType(FilterType.ALL)}
            >
                Todos os Produtos
            </FilterItem>

            <FilterItem
                selected={type === FilterType.SHIRT}
                onClick={() => handleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>

            <FilterItem
                selected={type === FilterType.MUG}
                onClick={() => handleChangeType(FilterType.MUG)}
            >
                Canecas
            </FilterItem>
        </FilterList>
    )
}