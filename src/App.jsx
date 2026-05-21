import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ListingCard from './components/ListingCard'
import PropertyDetails from './components/PropertyDetails'
import { rentalData } from './data/rentals'
import './App.css'

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [filteredData, setFilteredData] = useState(rentalData)

  const handleSearch = (searchParams) => {
    const { location } = searchParams
    if (location.trim() === '') {
      setFilteredData(rentalData)
    } else {
      const filtered = rentalData.filter(property =>
        property.location.toLowerCase().includes(location.toLowerCase()) ||
        property.name.toLowerCase().includes(location.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  return (
    <div className="app">
      <Header />
      <Hero onSearch={handleSearch} />
      
      <main className="main-content">
        <section className="listings-section">
          <div className="section-header">
            <h2>Featured Listings</h2>
            <p>Discover amazing rental properties across Uganda</p>
          </div>
          
          {filteredData.length > 0 ? (
            <div className="listings-grid">
              {filteredData.map(property => (
                <ListingCard
                  key={property.id}
                  property={property}
                  onSelect={setSelectedProperty}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No properties found. Try adjusting your search.</p>
            </div>
          )}
        </section>

        <section className="features-section">
          <h2>Why Choose RentalHub?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <h3>Wide Selection</h3>
              <p>Browse hundreds of verified rental properties</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <h3>Best Prices</h3>
              <p>Guaranteed lowest rates for quality stays</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <h3>Secure Booking</h3>
              <p>100% secure payment and booking process</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support available</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About RentalHub</h4>
            <p>Your trusted platform for finding and booking amazing rental properties across Uganda.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#browse">Browse Properties</a>
            <a href="#host">Become a Host</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@rentalhub.ug</p>
            <p>Phone: +256 123 456 789</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 RentalHub. All rights reserved.</p>
        </div>
      </footer>

      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  )
}

export default App
