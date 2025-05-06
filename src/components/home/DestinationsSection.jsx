import { useState } from 'react'
import { Link } from 'react-router-dom'
import { homeDestinations } from '../../data/homeDestinations'
import './destinationsSection.css'

export default function DestinationsSection() {
  const [activeTab, setActiveTab] = useState('highlights')
  
  const tabs = [
    { id: 'highlights', label: 'Highlights' },
    { id: 'cities', label: 'Cities' },
    { id: 'historic-sites', label: 'Historic Sites' },
    { id: 'national-parks', label: 'National Parks'},
    { id: 'nomadic-camps', label: 'Nomadic Camps'},
    { id: 'regions', label: 'Regions' },
    { id: 'food-and-drink', label: 'Food and Drink' },
  ]
  
  return (
    <section className="destinations-section">
      <div className="container">
        <div className="destinations-header">
          <h2 className="section-category">DESTINATIONS</h2>
          <h3 className="section-title">Unmissable places</h3>
        </div>
        
        <div className="destinations-tabs">
          <div className="tabs-container">
            {tabs.map(tab => (
              <button 
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="destinations-grid">
          {homeDestinations[activeTab]?.slice(0, 6).map((card, index) => {
            // Determine if card should be tall based on position
            const isPosition1 = index === 1;
            const isPosition3 = index === 3;
            const isPosition5 = index === 5;
            const isTall = isPosition1 || isPosition3 || isPosition5;
            
            return (
              <div 
                key={card.id} 
                className={`card card-${index + 1} ${isTall ? 'tall' : ''}`}
              >
                <div className="card-image">
                  <span className={`card-category ${card.category.toLowerCase()}`}>
                    {card.category}
                  </span>
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="card-footer">
                    <span>{card.minutes} minutes</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* <div className="view-all-container">
          <Link to="/destinations" className="view-all-link">
            View all destinations
          </Link>
        </div> */}
      </div>
    </section>
  )
}