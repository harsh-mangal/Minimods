import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div key={product.slug} className="product-container">
              <Link to={`/product/${product.slug}`}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <Link to={`/product/${product.slug}`}>
                <p className="product-name">{product.name}</p>
              </Link>
              <p className="product-price">
                <strong>{product.price}</strong>
              </p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
  )
}

export default HomeScreen