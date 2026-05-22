import React from 'react'
import './GuestPropertyCard.css'

export default function GuestPropertyCard({
  property,
  isFavorite,
  onFavorite,
  onView
}) {
  return (
    <div className="property-card guest-card">
      <div className="card-image-container">
        <img src={property.image} alt={property.name} className="card-image" />
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={onFavorite}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <span className="property-badge">{property.type}</span>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="property-name">{property.name}</h3>
          <div className="rating">⭐ {property.rating}</div>
        </div>

        <p className="property-location">📍 {property.location}</p>

        <div className="property-specs">
          <span>🛏️ {property.beds}</span>
          <span>🚿 {property.baths}</span>
        </div>

        <div className="amenities">
          {property.amenities.slice(0, 2).map((amenity, idx) => (
            <span key={idx} className="amenity-tag">
              {amenity}
            </span>
          ))}
        </div>

        <div className="card-footer">
          <div className="price-section">
            <p className="price">UGX {property.price.toLocaleString()}</p>
            <p className="period">/night</p>
          </div>
          <button className="btn btn-primary" onClick={onView}>
            View Details →
          </button>
        </div>
      </div>
    </div>
  )
}
