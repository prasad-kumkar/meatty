import React from 'react';
import logo from "./assets/logo.png";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    return (
        <nav className="header">
            <Link to="./">
                <img
                    className="header-logo"
                    src={logo}
                    alt="logo">
                </img>
            </Link>

            <div className="header-search">
                <input type="text" className="header-search-box"></input>
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">

                <Link to="/Login" className="header-link">
                    <div className="header-link-option">
                        <span className="header-link-option-one">Hello,</span>
                        <span className="header-link-option-two">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header-link">
                    <div className="header-link-option">
                        <span className="header-link-option-one">Your</span>
                        <span className="header-link-option-two">Orders</span></div>
                </Link>


                <Link to="./Checkout" className="header-link">
                    <div class="header-option-basket">
                        <ShoppingBasketIcon />
                        <span className="header-link-option-two header-basket-count">{basket?.length}</span>
                    </div>
                </Link>

            </div>

        </nav>
    );
}

export default Header;