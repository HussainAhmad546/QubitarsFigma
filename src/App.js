import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import ContactPage from './screens/ContactPage';
import ServicePage from './screens/ServicePage';
import BlogPage from './screens/BlogPage';
import ProductsPage from './screens/ProductsPage';
import SingleProductPage from './screens/SingleProductPage';

const App = () => {
  return (
    
   <BrowserRouter >
    <Header/>
    <Nav/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/Singleproduct" element={<SingleProductPage />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
