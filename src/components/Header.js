import React from "react";
import "./Header.css";
import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Badge,
  Nav,
} from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="search-bar"
            type="text"
            placeholder="Search"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Link to="/cart">
              <Dropdown.Toggle>
                <FaCartShopping
                  color="white"
                  fontSize="25px"
                  style={{ marginRight: "10px" }}
                />
                <Badge className="badge">10</Badge>
              </Dropdown.Toggle>
            </Link>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
