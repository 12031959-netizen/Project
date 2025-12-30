// src/Pages/Specials.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Specials.css';

const Specials = () => {
  const [activeTab, setActiveTab] = useState('weekly');

  const weeklySpecials = [
    {
      id: 1,
      name: "Lobster Risotto",
      description: "Creamy arborio rice with fresh Maine lobster and saffron",
      price: 32,
      originalPrice: 38,
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400",
      isPopular: true,
      days: ["Monday", "Wednesday", "Friday"]
    },
    {
      id: 2,
      name: "Wild Mushroom Ravioli",
      description: "Handmade pasta filled with seasonal wild mushrooms in truffle cream sauce",
      price: 24,
      originalPrice: 28,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400",
      isVegetarian: true,
      days: ["Tuesday", "Thursday"]
    },
    {
      id: 3,
      name: "Grilled Octopus",
      description: "Mediterranean-style octopus with lemon, olives, and roasted potatoes",
      price: 26,
      originalPrice: 30,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
      isPopular: true,
      days: ["Friday", "Saturday"]
    }
  ];

  const happyHour = [
    {
      id: 1,
      name: "Aperol Spritz",
      description: "Classic Italian cocktail with prosecco and soda",
      price: 8,
      originalPrice: 12,
      time: "4PM - 6PM",
      category: "cocktails"
    },
    {
      id: 2,
      name: "House Wine",
      description: "Glass of selected red or white wine",
      price: 6,
      originalPrice: 9,
      time: "4PM - 6PM",
      category: "wine"
    },
    {
      id: 3,
      name: "Craft Beer",
      description: "Rotating selection of local craft beers",
      price: 5,
      originalPrice: 7,
      time: "4PM - 6PM",
      category: "beer"
    },
    {
      id: 4,
      name: "Bruschetta Board",
      description: "Assorted bruschetta with seasonal toppings",
      price: 12,
      originalPrice: 16,
      time: "4PM - 6PM",
      category: "food"
    },
    {
      id: 5,
      name: "Calamari Fritti",
      description: "Crispy fried squid with lemon aioli",
      price: 10,
      originalPrice: 14,
      time: "4PM - 6PM",
      category: "food"
    }
  ];

  const seasonalSpecials = [
    {
      id: 1,
      name: "Autumn Squash Soup",
      description: "Creamy butternut squash soup with pumpkin seeds and crème fraîche",
      price: 14,
      season: "Fall",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
      isVegetarian: true
    },
    {
      id: 2,
      name: "Pumpkin Gnocchi",
      description: "Hand-rolled pumpkin gnocchi with sage brown butter",
      price: 22,
      season: "Fall",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400",
      isVegetarian: true
    },
    {
      id: 3,
      name: "Apple Crumble",
      description: "Warm apple crumble with vanilla bean ice cream",
      price: 12,
      season: "Fall",
      image: "https://images.unsplash.com/photo-1562007908-859b4ba9a1a2?w=400",
      isVegetarian: true
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'weekly':
        return (
          <div className="specials-grid">
            {weeklySpecials.map(special => (
              <div key={special.id} className="special-card">
                <div className="special-image">
                  <img src={special.image} alt={special.name} />
                  <div className="special-badges">
                    {special.isPopular && <span className="badge popular">Chef's Pick</span>}
                    {special.isVegetarian && <span className="badge vegetarian">Vegetarian</span>}
                    <span className="badge discount">Save ${special.originalPrice - special.price}</span>
                  </div>
                </div>
                <div className="special-content">
                  <h3>{special.name}</h3>
                  <p className="description">{special.description}</p>
                  <div className="special-days">
                    <strong>Available:</strong> {special.days.join(', ')}
                  </div>
                  <div className="price-section">
                    <span className="current-price">${special.price}</span>
                    <span className="original-price">${special.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'happyhour':
        return (
          <div className="happy-hour">
            <div className="happy-hour-header">
              <h3>Happy Hour</h3>
              <p className="time-range">Daily: 4:00 PM - 6:00 PM</p>
            </div>
            
            <div className="happy-hour-grid">
              {happyHour.map(item => (
                <div key={item.id} className="happy-hour-item">
                  <div className="item-header">
                    <h4>{item.name}</h4>
                    <span className="category-badge">{item.category}</span>
                  </div>
                  <p className="description">{item.description}</p>
                  <div className="price-section">
                    <span className="current-price">${item.price}</span>
                    <span className="original-price">${item.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'seasonal':
        return (
          <div className="specials-grid">
            {seasonalSpecials.map(special => (
              <div key={special.id} className="special-card">
                <div className="special-image">
                  <img src={special.image} alt={special.name} />
                  <div className="special-badges">
                    <span className="badge seasonal">{special.season} Special</span>
                    {special.isVegetarian && <span className="badge vegetarian">Vegetarian</span>}
                  </div>
                </div>
                <div className="special-content">
                  <h3>{special.name}</h3>
                  <p className="description">{special.description}</p>
                  <div className="price-section">
                    <span className="current-price">${special.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="specials-page">
      {/* Hero Section */}
      <section className="specials-hero">
        <div className="specials-hero-content">
          <h1>Weekly Specials</h1>
          <p>Discover our chef's exclusive creations and limited-time offers</p>
        </div>
      </section>

      <div className="specials-container">
        {/* Navigation Tabs */}
        <div className="specials-tabs">
          <button 
            className={`tab-btn ${activeTab === 'weekly' ? 'active' : ''}`}
            onClick={() => setActiveTab('weekly')}
          >
            🍽️ Weekly Specials
          </button>
          <button 
            className={`tab-btn ${activeTab === 'happyhour' ? 'active' : ''}`}
            onClick={() => setActiveTab('happyhour')}
          >
            🍻 Happy Hour
          </button>
          <button 
            className={`tab-btn ${activeTab === 'seasonal' ? 'active' : ''}`}
            onClick={() => setActiveTab('seasonal')}
          >
            🍂 Seasonal Menu
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {renderTabContent()}
        </div>

        {/* CTA Section */}
        <section className="specials-cta">
          <div className="cta-content">
            <h2>Don't Miss Out!</h2>
            <p>Special offers change frequently. Follow us on social media to stay updated with our latest creations.</p>
            <div className="cta-buttons">
              <Link to="/reservations" className="btn btn-primary">
                Reserve Your Table
              </Link>
              <Link to="/menu" className="btn btn-secondary">
                View Full Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Special Offers Banner */}
        <div className="special-offers-banner">
          <div className="offer-card">
            <h3>🎉 Weekend Brunch Special</h3>
            <p>Join us Saturday & Sunday 10AM-2PM for bottomless mimosas and live jazz</p>
            <span className="offer-price">$35 per person</span>
          </div>
          <div className="offer-card">
            <h3>👨‍👩‍👧‍👦 Family Night</h3>
            <p>Every Tuesday - Kids eat free with adult entree purchase</p>
            <span className="offer-note">*12 years and under</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;