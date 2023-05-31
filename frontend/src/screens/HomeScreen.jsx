import React, { useEffect, useReducer } from "react";
// import data from '../data';
import axios from "axios";
// import { Link } from "react-router-dom";
import logger from "use-reducer-logger";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "../components/Product";
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
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sl={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </main>
  );
};

export default HomeScreen;
