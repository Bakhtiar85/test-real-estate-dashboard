// src\components\PropertyGrid.tsx
import { PropertyGridProps } from "../types-interfaces/interfaces";
import PropertyCard from "./PropertyCard";

function PropertyGrid({ items }: PropertyGridProps) {
    if (items.length === 0) {
        return <p style={{ padding: "16px" }}>No results found. Try adjusting your filters.</p>;
    }

    return (
        <div className="property-grid">
            {items.map((p) => (
                <PropertyCard key={p.id} property={p} />
            ))}
        </div>
    );
}

export default PropertyGrid;
