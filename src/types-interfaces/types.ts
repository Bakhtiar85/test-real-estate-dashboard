// src\types-interfaces\types.ts
export type SortDir = 'asc' | 'desc';

export interface Property {
    id: string;
    title: string;
    price: number;        // in whatever currency unit, e.g., USD
    bedrooms: number;
    location: string;     // e.g., "Downtown", "Suburbs"
    image: string;        // URL to image
    description?: string; // optional long text for details page
}

export type Route =
    | { page: "list" }
    | { page: "details"; id: string };