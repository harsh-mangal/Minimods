import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";
import { Store } from "../Store";
import { formatPrice } from "../utils";
import axios from "axios";
import { toast } from "react-toastify";

const Product = (props) => {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const [showToast, setShowToast] = useState(false);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      setShowToast(true);
      toast.error("Product is Out of Stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    // Navigate('/cart');
  };
  return (
    <Card className="product-container">
      <Link to={`/product/${product.slug}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>{formatPrice(product.price)}</Card.Text>
        {product.countInStock === 0 ? (
          <Button disabled variant="light">
            Out of Stock
          </Button>
        ) : (
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
