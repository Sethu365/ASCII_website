import "../styles/Shop.css";
import { FaSearch, FaShoppingCart, FaFilter } from "react-icons/fa";
import shop1 from "../assets/shop1.jpg";
import shop2 from "../assets/shop2.jpg";
import shop3 from "../assets/shop3.jpg";
import shop4 from "../assets/shop4.jpg";
import shop5 from "../assets/shop5.jpg";
import shop6 from "../assets/shop6.jpg";
import shop7 from "../assets/shop7.jpg";
import shop8 from "../assets/shop8.jpg";

export default function Shop() {
  const products = [
    { name: "Hill's Science Diet", category: "Prescription Diets", img: shop1 },
    { name: "Royal Canin", category: "Veterinary Diet", img: shop2 },
    { name: "Purina Pro Plan", category: "Sport Performance 30/20", img: shop3 },
    { name: "Iams", category: "Proactive Health", img: shop4 },
    { name: "Blue Buffalo", category: "Life Protection Formula", img: shop5},
    { name: "Wellness", category: "Core", img: shop6 },
    { name: "Merrick", category: "Grain Free", img: shop7 },
    { name: "Natural Balance", category: "Limited Ingredient Diets", img: shop8 },
  ];

  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>Shop</h1>
      </header>

<section className="filters">
  <div className="filter-buttons">
    <h1>Shop for your pet</h1>
    <button>All</button>
    <button>Food</button>
    <button>Treats</button>
    <button>Toys</button>
    <button>Health</button>
    <button>Grooming</button>
  </div>

  <div className="refine-by">
    <h1>Refine by</h1>
    <button>Dog</button>
    <button>Cat</button>
    <button>Small Pet</button>
    <button>Bird</button>
    <button>Fish</button>
  </div>
</section>


      <section className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.category}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
