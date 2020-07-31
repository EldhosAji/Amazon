import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Nav() {
  const [{ cart, user }] = useStateValue();
  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="nav">
      <Link to="/">
        <img
          className="nav__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="nav__search">
        <input type="text" className="nav__searchInput" />
        <SearchIcon className="nav__searchIcon" />
      </div>
      <div className="nav__links">
        <Link to={!user && "/Login"} className="nav__link">
          <div onClick={logout} className="nav__option">
            <span className="nav__optionOne">Hello {user?.email}</span>
            <span className="nav__optionTwo">
              {!user ? "Sign in" : "Sign out"}
            </span>
          </div>
        </Link>
        <Link to="/" className="nav__link">
          <div className="nav__option">
            <span className="nav__optionOne">Returns</span>
            <span className="nav__optionTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="nav__link">
          <div className="nav__option">
            <span className="nav__optionOne">Your</span>
            <span className="nav__optionTwo">Prime</span>
          </div>
        </Link>
        <Link to="/Checkout" className="nav__link">
          <div className="nav__optionBasket">
            <ShoppingCartIcon />
            <span className="nav__optionTwo nav__optionBasketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
