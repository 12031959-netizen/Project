// src/Pages/Gallery.js
import { useState } from 'react';
import '../Styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant Interior",
      category: "interior",
      title: "Elegant Dining Space"
    },
    {
      id: 2,
      src: "https://plus.unsplash.com/premium_photo-1724193102397-8c81485b7117?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Fresh Pasta",
      category: "food",
      title: "Handmade Pasta"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wood Fired Pizza",
      category: "food",
      title: "Wood-Fired Pizza"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt:"Gourmet Burgers",
      category: "food",
      title: "Gourmet Specialties"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1606920301459-d66500c43ff6?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Wine Collection",
      category: "interior",
      title: "Wine Collection"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Dessert Platter",
      category: "food",
      title: "Artisan Desserts"
    },
    {
      id: 7,
      src: "https://plus.unsplash.com/premium_photo-1682092170538-9ebcb3a09ac1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "chef",
      title: "Expert Chef Team"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1760982192590-de2b005bb4d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Bar Area",
      category: "interior",
      title: "Modern Bar"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Private Dining",
      category: "interior",
      title: "Private Events"
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'food', label: 'Food' },
    { key: 'interior', label: 'Restaurant' },
    { key: 'chef', label: 'Our Team' }
  ];

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <h1>Our Gallery</h1>
          <p>Experience the essence of Gusto Italiano through our lens</p>
        </div>
      </section>

      <div className="gallery-container">
        {/* Filter Buttons */}
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <div className="image-container">
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>{image.title}</h4>
                    <span className="view-btn">View</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="close-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                &times;
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="gallery-cta">
          <div className="cta-content">
            <h2>Ready to Experience Our Cuisine?</h2>
            <p>Book your table today and taste the difference</p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => window.location.href = '/reservations'}>
                Make a Reservation
              </button>
              <button className="btn btn-secondary" onClick={() => window.location.href = '/menu'}>
                View Our Menu
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;