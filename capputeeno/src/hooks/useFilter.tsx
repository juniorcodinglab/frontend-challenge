import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

interface useFilter {

}

export function useFilter() {
    return useContext(FilterContext);

}