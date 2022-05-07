import data from './data.js';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Shop() {
  return (
    <div className="Shop">
      <div className="Header">
        <Header />
      </div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="ShopDisplay">
        {data.products.map((product) => (
          <div key={product.slug} className="product">
            <Link to={`/product/${product.slug}`}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="product-content">
              <Link to={`/product${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
