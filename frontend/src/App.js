import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/esm/Badge";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Minimods</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  <i class="fa-solid fa-cart-shopping"></i>
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        {/* <footer>
          <div className="text-center">All Rights Reseved</div>
        </footer> */}
        <footer
          style={{
            backgroundColor: "#222",
            color: "#fff",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "14px" }}>
            &copy; 2023 Minimods. All rights reserved. |
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Privacy Policy
            </a>{" "}
            |
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Terms of Service
            </a>
          </div>
          <div style={{ fontSize: "12px", marginTop: "10px" }}>
            Unlock Limitless Possibilities with Minimods: Your Ultimate
            Destination for Custom PC Build Hardware, Tools, and Computer Parts!
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
