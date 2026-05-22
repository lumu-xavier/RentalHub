import React, { useState } from 'react'
import './HostPropertyForm.css'

export default function HostPropertyForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    type: 'Apartment',
    beds: 1,
    baths: 1,
    description: '',
    amenities: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'beds' || name === 'baths' || name === 'price' ? Number(value) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.location || !formData.price) {
      alert('Please fill in all required fields')
      return
    }

    onSubmit({
      ...formData,
      amenities: formData.amenities.split(',').map(a => a.trim()).filter(a => a),
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
      rating: 4.5,
      reviews: 0,
      available: true,
      earnings: 0
    })

    setFormData({
      name: '',
      location: '',
      price: '',
      type: 'Apartment',
      beds: 1,
      baths: 1,
      description: '',
      amenities: ''
    })
  }

  return (
    <form className="property-form" onSubmit={handleSubmit}>
      <h3>Add New Property</h3>

      <div className="form-row">
        <div className="form-group">
          <label>Property Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter property name"
            required
          />
        </div>
        <div className="form-group">
          <label>Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Price per Night (UGX) *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </div>
        <div className="form-group">
          <label>Property Type</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
            <option>Studio</option>
            <option>Guest House</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Bedrooms</label>
          <input
            type="number"
            name="beds"
            value={formData.beds}
            onChange={handleChange}
            min="1"
          />
        </div>
        <div className="form-group">
          <label>Bathrooms</label>
          <input
            type="number"
            name="baths"
            value={formData.baths}
            onChange={handleChange}
            min="1"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your property..."
          rows="4"
        />
      </div>

      <div className="form-group">
        <label>Amenities (comma-separated)</label>
        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
          placeholder="WiFi, Kitchen, AC, Pool, etc."
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          Add Property
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}
