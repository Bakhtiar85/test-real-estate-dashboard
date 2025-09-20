// src\types-interfaces\interfaces.ts
import { Property, SortDir } from "./types";

export interface ControlsBarProps {
    search: string;
    setSearch: (val: string) => void;
    minBeds: number;
    setMinBeds: (val: number) => void;
    sortDir: SortDir;
    setSortDir: (val: SortDir) => void;
}

export interface PropertyCardProps {
    property: Property;
}

export interface PropertyGridProps {
    items: Property[];
}

export interface DetailsPageProps {
    slug: string;
}