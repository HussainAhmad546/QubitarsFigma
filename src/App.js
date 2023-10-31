import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import ContactPage from './screens/ContactPage';
import ServicePage from './screens/ServicePage';
import BlogPage from './screens/BlogPage'
import ProductsPage from './screens/ProductsPage';
import SingleProductPage from './screens/SingleProductPage';
import QoutePage from './screens/QoutePage';
import BlogDetail from './screens/BlogDetailPage';

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
        <Route path="//product/:productId" element={<SingleProductPage />} />
        <Route path="/qoute" element={<QoutePage/>} />
        <Route
          path="/blog/:id"
          element={<BlogDetail />}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
