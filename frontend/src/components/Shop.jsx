import data from './data.js';

export default function Shop() {
  return (
    <div className="Shop">
      {data.products.map((product) => (
        <div key={product.slug} className="product">
          <a href={`/product/${product.slug}`}>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
          </a>
          <div className="product-content">
            <a href={`/product${product.slug}`}>
              <p>{product.name}</p>
            </a>
            <p>
              <strong>${product.price}</strong>
            </p>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
