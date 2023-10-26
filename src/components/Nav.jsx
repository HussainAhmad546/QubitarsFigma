import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Nav.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Nav = () => {
    const navigate=useNavigate();

    return (
        <div className="nav">
            <div className="nav-wrapper">
            <button className="all-categories-button">
                <FaBars className="icon" />
                All Categories
            </button>
            <nav className="nav-list">
                <ul>
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li onClick={()=>navigate("/about")}>About</li>
                    <li onClick={()=>navigate("/service")}>Service</li>
                    <li onClick={()=>navigate("/blog")}>Blog</li>
                    <li onClick={()=>navigate("/contact")}>Contact</li>
                    <li onClick={() => navigate("/products")}>Products</li>

                </ul>
            </nav>
            <Link to='/qoute'><button className="quote-button" Link='/qoute'>Request Quote</button></Link>
            
            </div>
        </div>
    );
};

export default Nav;
