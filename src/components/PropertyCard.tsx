// src\components\PropertyCard.tsx
import { PropertyCardProps } from "../types-interfaces/interfaces";
import { goToDetails } from "../router";
import "./PropertyCard.css";

function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="property-card" onClick={() => goToDetails(property.id)}>
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-info">
        <h2 className="property-title">{property.title}</h2>
        <p className="property-price">${property.price.toLocaleString()}</p>
        <p className="property-details">
          {property.bedrooms} BR · {property.location}
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;