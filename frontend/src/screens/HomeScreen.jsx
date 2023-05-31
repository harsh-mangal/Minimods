import React, { useEffect, useReducer} from "react";
// import data from '../data';
import axios from "axios";
import { Link } from "react-router-dom";
import logger from "use-reducer-logger";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  // const [products , setProducts]  = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <main>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">Error</div>
        ) : (
          products.map((product) => (
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
                <strong>₹{product.price}</strong>
              </p>
              <button class="add-to-cart-button">Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default HomeScreen;
