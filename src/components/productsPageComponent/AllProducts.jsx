import React from 'react';
import '../../styles/Products.css';
import productData from '../../data/productsData';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className='products-container all-products-container'>
      <h1>Accessories</h1>
      <hr className='products-hr' />
      <div className="products">
        {productData.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.pic} alt='dull' height={130} width={40} className='image-gallery' />
            <h3 style={{ textAlign: 'center', color: 'black', fontSize: '15px', fontWeight: 'bold' }}>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">{product.price}</span>
            <button className="buy-button" onClick={() => navigate("/Singleproduct")}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
