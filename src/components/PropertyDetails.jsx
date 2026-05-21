import React, { useState } from 'react'
import './PropertyDetails.css'

export default function PropertyDetails({ property, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [guests, setGuests] = useState('1')

  if (!property) return null

  const images = [property.image, property.image, property.image, property.image]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="detail-gallery">
          <img src={images[selectedImage]} alt="Property" className="main-image" />
          <div className="gallery-thumbnails">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Thumbnail ${idx}`}
                className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
        </div>

        <div className="detail-info">
          <div className="detail-header">
            <div>
              <h1>{property.name}</h1>
              <p className="detail-location">📍 {property.location}</p>
              <div className="detail-rating">⭐ {property.rating} ({property.reviews} reviews)</div>
            </div>
            <div className="price-large">
              <span>{property.currency} {property.price.toLocaleString()}</span>
              <span className="per-night">/night</span>
            </div>
          </div>

          <div className="detail-specs">
            <div className="spec">
              <span className="spec-icon">🛏️</span>
              <div>
                <p className="spec-label">Beds</p>
                <p className="spec-value">{property.beds}</p>
              </div>
            </div>
            <div className="spec">
              <span className="spec-icon">🚿</span>
              <div>
                <p className="spec-label">Baths</p>
                <p className="spec-value">{property.baths}</p>
              </div>
            </div>
            <div className="spec">
              <span className="spec-icon">🏘️</span>
              <div>
                <p className="spec-label">Type</p>
                <p className="spec-value">{property.type}</p>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>About this property</h3>
            <p>{property.description}</p>
          </div>

          <div className="detail-section">
            <h3>Amenities</h3>
            <div className="amenities-grid">
              {property.amenities.map((amenity, idx) => (
                <div key={idx} className="amenity-item">
                  <span className="amenity-icon">✓</span>
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="booking-section">
            <div className="booking-form">
              <label>Number of Guests</label>
              <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <button className="book-btn">Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
