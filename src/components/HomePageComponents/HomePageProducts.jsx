import React from 'react';
import '../../styles/Products.css';
import productData from '../../data/productsData';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  // Get the first 8 products
  const first8Products = productData.slice(0, 8);

  return (
    <div className='products-container'>
      <h1>Accessories</h1>
      <hr className='products-hr' />
      <div className="products">
        {first8Products.map((product) => (
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