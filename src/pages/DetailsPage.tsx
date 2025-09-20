// src\pages\DetailsPage.tsx
import { properties } from "../data/properties";
import { goToList } from "../router";
import { DetailsPageProps } from "../types-interfaces/interfaces";

function DetailsPage({ id }: DetailsPageProps) {
    const property = properties.find((p) => p.id === id);

    if (!property) {
        return (
            <div style={{ padding: "16px" }}>
                <p>Property not found.</p>
                <button onClick={goToList}>Back</button>
            </div>
        );
    }

    return (
        <div style={{ padding: "16px" }}>
            <button onClick={goToList} style={{ marginBottom: "16px" }}>
                ← Back
            </button>
            <h2>{property.title}</h2>
            <img
                src={property.image}
                alt={property.title}
                style={{ maxWidth: "600px", width: "100%", borderRadius: "8px" }}
            />
            <p>
                <strong>Price:</strong> ${property.price.toLocaleString()}
            </p>
            <p>
                <strong>Bedrooms:</strong> {property.bedrooms}
            </p>
            <p>
                <strong>Location:</strong> {property.location}
            </p>
            {property.description && <p>{property.description}</p>}
        </div>
    );
}

export default DetailsPage;
