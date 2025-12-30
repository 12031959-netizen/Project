// src/Pages/Menu.js
import { useState } from 'react';
import MenuCategory from '../Components/MenuCategory';
import '../Styles/Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const menuCategories = {
    appetizers: [
      {
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        price: 12,
        ingredients: ["Tomatoes", "Garlic", "Basil", "Olive Oil"],
        isVegetarian: true
      },
      {
        name: "Calamari Fritti",
        description: "Crispy fried squid served with marinara sauce",
        price: 16,
        ingredients: ["Squid", "Flour", "Lemon", "Marinara"],
        isPopular: true
      }
    ],
    mains: [
      {
        name: "Spaghetti Carbonara",
        description: "Classic Roman pasta with eggs, cheese, pancetta, and black pepper",
        price: 22,
        ingredients: ["Spaghetti", "Eggs", "Pecorino", "Pancetta", "Pepper"],
        isPopular: true
      },
      {
        name: "Osso Buco",
        description: "Braised veal shanks with saffron risotto",
        price: 36,
        ingredients: ["Veal", "White Wine", "Vegetables", "Risotto"],
        isPopular: true
      }
    ],
    desserts: [
      {
        name: "Tiramisu",
        description: "Coffee-flavored Italian dessert",
        price: 10,
        ingredients: ["Mascarpone", "Coffee", "Cocoa", "Ladyfingers"],
        isVegetarian: true,
        isPopular: true
      },
      {
        name: "Panna Cotta",
        description: "Sweetened cream thickened with gelatin",
        price: 9,
        ingredients: ["Cream", "Sugar", "Vanilla", "Berries"],
        isVegetarian: true
      }
    ],
    drinks: [
      {
        name: "House Red Wine",
        description: "Glass of our signature Chianti",
        price: 8,
        ingredients: ["Sangiovese Grapes"]
      },
      {
        name: "Limoncello Spritz",
        description: "Refreshing Italian cocktail",
        price: 12,
        ingredients: ["Limoncello", "Prosecco", "Soda"]
      }
    ]
  };

  const categoryNames = {
    appetizers: "Appetizers",
    mains: "Main Courses", 
    desserts: "Desserts",
    drinks: "Drinks"
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Fresh ingredients, authentic flavors</p>
      </div>
      
      <div className="menu-categories">
        {Object.keys(menuCategories).map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {categoryNames[category]}
          </button>
        ))}
      </div>

      <MenuCategory 
        items={menuCategories[activeCategory]} 
        categoryName={categoryNames[activeCategory]}
      />
    </div>
  );
};

export default Menu;