// src/components/FeaturedMenu/FeaturedMenu.js
import { Link } from 'react-router-dom';
import '../Styles/FeaturedMenu.css';

const FeaturedMenu = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Truffle Pasta",
      description: "Handmade pasta with black truffle and parmesan",
      price: 24,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      description: "Atlantic salmon with lemon butter sauce",
      price: 28,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"
    },
    {
      id: 3,
      name: "Tiramisu",
      description: "Classic Italian dessert with mascarpone",
      price: 12,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400"
    }
  ];

  return (
    <section className="featured-menu">
      <div className="container">
        <h2>Featured Dishes</h2>
        <p className="subtitle">Chef's special selections for this season</p>
        
        <div className="featured-grid">
          {featuredItems.map(item => (
            <div key={item.id} className="featured-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-content">
                <h3>{item.name}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-footer">
                  <span className="price">${item.price}</span>
                  <span className="popular-badge">Popular</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all">
          <Link to="/menu" className="view-all-btn">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;