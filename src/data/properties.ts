// src\data\properties.ts
import { Property } from "../types-interfaces/types";
import { slugify } from "../utils/slug";

type RawProperty = Omit<Property, 'slug'>;

const raw: RawProperty[] = [
  { id: "1", title: "Modern Apartment", price: 250000, bedrooms: 2, location: "Downtown", image: "https://via.placeholder.com/400x250?text=Apartment+1", description: "A stylish modern apartment located in the heart of the city." },
  { id: "2", title: "Cozy Family House", price: 450000, bedrooms: 4, location: "Suburbs", image: "https://via.placeholder.com/400x250?text=House+1", description: "A comfortable home perfect for a growing family." },
  { id: "3", title: "Luxury Villa", price: 1200000, bedrooms: 5, location: "Beachside", image: "https://via.placeholder.com/400x250?text=Villa+1", description: "A luxurious villa with stunning ocean views." },
  { id: "4", title: "Compact Studio", price: 150000, bedrooms: 1, location: "Downtown", image: "https://via.placeholder.com/400x250?text=Studio+1", description: "Perfect for singles or students, right next to public transport." },
  { id: "5", title: "Rustic Cottage", price: 300000, bedrooms: 3, location: "Countryside", image: "https://via.placeholder.com/400x250?text=Cottage+1", description: "A charming cottage with lots of greenery around." },
  { id: "6", title: "Penthouse Suite", price: 950000, bedrooms: 3, location: "City Center", image: "https://via.placeholder.com/400x250?text=Penthouse+1", description: "High-rise penthouse with panoramic skyline views." },
  { id: "7", title: "Suburban Duplex", price: 400000, bedrooms: 3, location: "Suburbs", image: "https://via.placeholder.com/400x250?text=Duplex+1", description: "Spacious duplex with garage and backyard." },
  { id: "8", title: "Beach Bungalow", price: 600000, bedrooms: 2, location: "Beachside", image: "https://via.placeholder.com/400x250?text=Bungalow+1", description: "Relaxed beach bungalow just steps from the water." },
  { id: "9", title: "Downtown Loft", price: 350000, bedrooms: 2, location: "Downtown", image: "https://via.placeholder.com/400x250?text=Loft+1", description: "Trendy loft with exposed brick and open layout." },
  { id: "10", title: "Country Estate", price: 2000000, bedrooms: 6, location: "Countryside", image: "https://via.placeholder.com/400x250?text=Estate+1", description: "Expansive estate with gardens, stables, and more." },
  { id: "11", title: "Budget Apartment", price: 120000, bedrooms: 1, location: "Downtown", image: "https://via.placeholder.com/400x250?text=Apartment+2", description: "Affordable living option close to work and shops." },
  { id: "12", title: "Mountain Cabin", price: 500000, bedrooms: 3, location: "Mountains", image: "https://via.placeholder.com/400x250?text=Cabin+1", description: "Scenic mountain retreat with fireplace and deck." },
  { id: "13", title: "Townhouse", price: 380000, bedrooms: 3, location: "City Outskirts", image: "https://via.placeholder.com/400x250?text=Townhouse+1", description: "Modern townhouse with small garden." },
  { id: "14", title: "Luxury Condo", price: 800000, bedrooms: 4, location: "City Center", image: "https://via.placeholder.com/400x250?text=Condo+1", description: "Premium condo with pool and fitness access." },
  { id: "15", title: "Historic Mansion", price: 3000000, bedrooms: 8, location: "Countryside", image: "https://via.placeholder.com/400x250?text=Mansion+1", description: "Grand mansion with historic architecture." }
];

export const properties: Property[] = raw.map(p => ({
  ...p,
  slug: `${slugify(p.title)}-${p.id}`
}));
