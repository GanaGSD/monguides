import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { slides } from '../../data/hero'
import './Hero.css'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className='hero-section'>
      <div className="hero-slider">
        {/* Full-screen slider */}
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ 
                backgroundImage: slide.type === 'image' ? `url(${slide.src})` : 'none',
              }}
            >
              {slide.type === 'video' && (
                <video 
                  autoPlay 
                  muted 
                  loop 
                  className="slide-video"
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              )}
              
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <div className="slide-buttons">
                  <Link to="/destinations" className="btn btn-primary">
                    Explore Destinations
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation arrows */}
          <button 
            className="slider-nav prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <span>❮</span>
          </button>
          <button 
            className="slider-nav next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <span>❯</span>
          </button>
        </div>
        
        {/* Slider pagination dots */}
        <div className="slider-pagination">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}