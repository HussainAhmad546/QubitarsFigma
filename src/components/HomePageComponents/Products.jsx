// import React from 'react'
// import '../styles/Products.css'
// import { FaArrowRight } from 'react-icons/fa';

// const Products = () => {
//   return (
//     <div className='products-container'>
//       <nav className='products-list'> 
//         <ul>
//             <li>New Arrival</li>
//             <li style={{color:'orange'}}>Featured</li>
//             <li>Top Selling</li>
//             <li className='seeAll'>See All <FaArrowRight color='orange'/></li>
//         </ul>
//       </nav>
//       <hr className='products-hr'/>
//       <div className="products">
            
//       </div>
//     </div>
//   )
// }

// export default Products

import React from 'react';
import '../../styles/Products.css';
import { FaArrowRight } from 'react-icons/fa';
import productData from '../../data/productsData'; // Import the product data
import { useNavigate } from 'react-router-dom';

const Products = () => {

  const navigate=useNavigate()
  return (
    <div className='products-container'>
      <nav className='products-list'> 
        <ul>
          <li>New Arrival</li>
          <li style={{ color: 'orange' }}>Featured</li>
          <li>Top Selling</li>
          <li className='seeAll'>See All <FaArrowRight color='orange' /></li>
        </ul>
      </nav>
      <hr className='products-hr' />
      <div className="products">
        {productData.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.pic}  alt='dull' height={100} width={80} className='image-gallery'/>
            <h3 style={{textAlign:'center', color:'black', fontSize:'15px', fontWeight:'bold' }}>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">{product.price}</span>
            <button className="buy-button" onClick={()=>navigate("/Singleproduct")} >Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

