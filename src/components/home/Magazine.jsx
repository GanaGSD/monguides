import { Link } from 'react-router-dom'
import './magazine.css'

export default function MagazineSection() {
  return (
    <section className="magazine-section">
      <div className="container">
        <div className="magazine-header">
          <div className="title-container">
            <h2 className="section-label">MAGAZINE</h2>
            <h3 className="section-title">The source of inspiration for your Mongolian adventures</h3>
          </div>
          <Link to="/magazine" className="view-all-link">
            View all <span className="arrow-icon">→</span>
          </Link>
        </div>
        
        <div className="magazine-layout">
          <div className="featured-article">
            <div className="article-image" style={{ backgroundImage: `url('/api/placeholder/800/600')` }}>
              <span className="article-category">Handicrafts and design</span>
              <button className="favorite-button" aria-label="Add to favorites">
                <span className="heart-icon">♡</span>
              </button>
            </div>
            <div className="article-content">
              <h4 className="article-title">Carved in History: The Ancient Art of Mongolian Stone Craft</h4>
              <div className="article-meta">
                <span className="reading-time">2 minutes</span>
              </div>
            </div>
          </div>
          
          <div className="article-list">
            <div className="article-item">
              <div className="article-thumbnail" style={{ backgroundImage: `url('/api/placeholder/200/200')` }}></div>
              <div className="article-info">
                <span className="article-category unesco">UNESCO</span>
                <h4 className="article-title">Orkhon Valley: Mongolia's Ancient Cultural Landscape</h4>
                <span className="reading-time">4 minutes</span>
              </div>
              <button className="favorite-button" aria-label="Add to favorites">
                <span className="heart-icon">♡</span>
              </button>
            </div>
            
            <div className="article-item">
              <div className="article-thumbnail" style={{ backgroundImage: `url('/api/placeholder/200/200')` }}></div>
              <div className="article-info">
                <span className="article-category shopping">Shopping</span>
                <h4 className="article-title">The shopping guide: seven markets for authentic Mongolian crafts</h4>
                <span className="reading-time">5 minutes</span>
              </div>
              <button className="favorite-button" aria-label="Add to favorites">
                <span className="heart-icon">♡</span>
              </button>
            </div>
            
            <div className="article-item">
              <div className="article-thumbnail" style={{ backgroundImage: `url('/api/placeholder/200/200')` }}></div>
              <div className="article-info">
                <span className="article-category nature">Nature</span>
                <h4 className="article-title">9 places in Mongolia where waking at sunset up feels like a dream</h4>
                <span className="reading-time">4 minutes</span>
              </div>
              <button className="favorite-button" aria-label="Add to favorites">
                <span className="heart-icon">♡</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}