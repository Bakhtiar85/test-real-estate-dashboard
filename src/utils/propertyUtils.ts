// src\utils\propertyUtils.ts
import { Property, SortDir } from "../types-interfaces/types";

export function filterAndSortProperties(
    items: Property[],
    search: string,
    minBeds: number,
    sortDir: SortDir
): Property[] {
    return items
        .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
        .filter((p) => p.bedrooms >= minBeds)
        .sort((a, b) => (sortDir === "asc" ? a.price - b.price : b.price - a.price));
}
