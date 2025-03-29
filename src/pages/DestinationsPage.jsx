import { useState } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import './destinationsPage.css'

export default function DestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState(null)
  
  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination)
    // Scroll to the detailed view section
    document.getElementById('destination-detail').scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <div className="destinations-page">
      <div className="dest-page-herobanner">
        <div className="container">
          <h1>Discover Mongolia's Cultural Landscapes</h1>
          <p>Explore the diverse regions that have shaped Mongolia's unique heritage</p>
        </div>
      </div>
      
      <section className="dest-page-cards-section">
        <div className="container">
          <h2>Destinations</h2>
          <div className="dest-page-cards">
            {destinations.map(destination => (
              <div 
                key={destination.id} 
                className="dest-page-card"
                onClick={() => handleDestinationClick(destination)}
              >
                <div className="dest-page-card-image-container">
                  <div 
                    className="dest-page-card-image"
                    style={{ backgroundImage: `url('/api/placeholder/600/400')` }}
                  >
                    <span className={`card-category ${destination.category.toLowerCase()}`}>
                      {destination.category}
                    </span>
                  </div>
                </div>
                <div className="dest-page-card-content">
                  <h3 className="dest-page-card-title">{destination.title}</h3>
                  <p className="dest-page-card-subtitle">{destination.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="dest-page--detail" className="dest-page-detail-section">
        <div className="container">
          <h2>Featured Destination</h2>
          
          {selectedDestination ? (
            <div className="dest-page-detail">
              <div className="dest-page-image-column">
                <div 
                  className="dest-page-large-image"
                  style={{ backgroundImage: `url('/api/placeholder/800/600')` }}
                >
                  <span className={`image-category ${selectedDestination.category.toLowerCase()}`}>
                    {selectedDestination.category}
                  </span>
                </div>
                <h3 className="dest-page-detail-title">{selectedDestination.title}</h3>
                <p className="dest-page-detail-subtitle">{selectedDestination.subtitle}</p>
                
                <div className="dest-page-highlights">
                  <h4>Highlights</h4>
                  <ul>
                    {selectedDestination.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="dest-page--content-column">
                <div className="dest-page--description">
                  <p>{selectedDestination.description}</p>
                </div>
                
                <div className="explore-more">
                  <h4>Explore More</h4>
                  <Link to={`/destinations/${selectedDestination.id}`} className="explore-button">
                    Discover {selectedDestination.title}
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-selection-message">
              <p>Select a destination above to see detailed information</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}