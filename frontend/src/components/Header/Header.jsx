import React from 'react'
import { NavLink } from "react-router-dom"
import "./Header.css"
import { FaSearch, FaShoppingCart, FaRegHeart } from 'react-icons/fa';
const Header = () => {
    return (
        <div id='header'>
            <div className='nav'>
                <NavLink to="/"><img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" /></NavLink>
                <ul>
                    <li><NavLink to="/" onClick={(isActive) => (isActive ? ".active" : "")}>Home</NavLink></li>
                    <li><NavLink to="shop" onClick={(isActive) => (isActive ? ".active" : "")}>Shop</NavLink></li>
                    <li><NavLink to="features" onClick={(isActive) => (isActive ? ".active" : "")}>Features</NavLink></li>
                    <li><NavLink to="blog" onClick={(isActive) => (isActive ? ".active" : "")}>Blog</NavLink></li>
                    <li><NavLink to="about" onClick={(isActive) => (isActive ? ".active" : "")}>About</NavLink></li>
                    <li><NavLink to="contact" onClick={(isActive) => (isActive ? ".active" : "")}>Contact</NavLink></li>
                </ul>
            </div>
            <ul>
                <FaSearch />
                <FaShoppingCart />
                <FaRegHeart />
            </ul>

        </div>
    )
}

export default Header