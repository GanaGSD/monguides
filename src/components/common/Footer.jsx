import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">TravelWeb Mongolia</h3>
            <p className="footer-description">
              Your guide to exploring the Land of Blue Sky and experiencing nomadic traditions.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Mongolia</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/experiences">Experiences</Link></li>
              <li><Link to="/planning">Travel Planning</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">More Information</h3>
            <ul className="footer-links">
              <li><Link to="/culture">Culture & Customs</Link></li>
              <li><Link to="/itineraries">Itineraries</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/resources#contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              {/* Social media links will go here */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} TravelWeb Mongolia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}