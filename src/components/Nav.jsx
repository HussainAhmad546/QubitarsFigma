import React, { useState }from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Nav.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Modal, Box } from '@mui/material';
import {AiOutlineLaptop, AiOutlineMobile, AiOutlineHome} from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'
 

const Nav = () => {
    const navigate=useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <div className="nav">
            <div className="nav-wrapper">
            <button className="all-categories-button" onClick={openModal}>
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
        <Modal
            open={isModalOpen}
            onClose={closeModal}
            aria-labelledby="all-categories-modal"
            aria-describedby="list-of-categories"
            >
            <Box className="modal-content">
                <ul>
                 <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <AiOutlineLaptop/>Laptop
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <AiOutlineMobile/>Mobile
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <AiOutlineHome/>Home Devices
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <AiOutlineMobile/>LCD
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                <li onClick={() => {
                    closeModal();
                    navigate("/products")
                  }}>
                    <AiOutlineMobile/>Keyboard
                    <span className="arrow-icon"><IoIosArrowForward /></span>
                </li><hr/>
                </ul>
            </Box>
        </Modal>
     </>
    );
};

export default Nav;



