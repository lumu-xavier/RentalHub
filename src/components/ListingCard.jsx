import React from 'react'
import './ListingCard.css'

export default function ListingCard({ property, onSelect }) {
  return (
    <div className="listing-card" onClick={() => onSelect(property)}>
      <div className="card-image-container">
        <img src={property.image} alt={property.name} className="card-image" />
        <div className="card-badge">{property.type}</div>
        <button className="favorite-btn">♡</button>
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{property.name}</h3>
          <span className="card-rating">⭐ {property.rating}</span>
        </div>
        
        <p className="card-location">📍 {property.location}</p>
        
        <div className="card-amenities">
          {property.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="amenity-tag">{amenity}</span>
          ))}
        </div>
        
        <div className="card-specs">
          <span>🛏️ {property.beds} bed{property.beds > 1 ? 's' : ''}</span>
          <span>🚿 {property.baths} bath{property.baths > 1 ? 's' : ''}</span>
        </div>
        
        <div className="card-footer">
          <div className="price">
            <span className="price-amount">{property.currency} {property.price.toLocaleString()}</span>
            <span className="price-unit">/night</span>
          </div>
          <button className="view-btn">View →</button>
        </div>
      </div>
    </div>
  )
}
