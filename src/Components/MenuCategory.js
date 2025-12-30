// components/MenuCategory/MenuCategory.js
import '../Styles/MenuCategory.css';

const MenuCategory = ({ items, categoryName }) => {
  return (
    <div className="menu-category">
      {categoryName && (
        <h2 className="category-title">
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
        </h2>
      )}
      
      <div className="menu-items">
        {items && items.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-header">
              <h3 className="item-name">{item.name}</h3>
              <span className="item-price">${item.price}</span>
            </div>
            
            {item.description && (
              <p className="item-description">{item.description}</p>
            )}
            
            {item.ingredients && (
              <p className="item-ingredients">
                {item.ingredients.join(', ')}
              </p>
            )}
            
            {item.isPopular && (
              <span className="popular-badge">Chef's Choice</span>
            )}
            
            {item.isVegetarian && (
              <span className="vegetarian-badge">🌱 Vegetarian</span>
            )}
            
            {item.isSpicy && (
              <span className="spicy-badge">🌶️ Spicy</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;