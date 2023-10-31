import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../data/productsData';
import "../../styles/singleProduct/singleproduct.css"
import DescriptionSection from './DescriptionSection'
import SingleProductFooter from './SingleProductFooter';

const SingleProduct = () => {
  let { productId } = useParams();
  const product = productData.find((p) => p.id.toString() === productId);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
    <div className='single-product-detail-main-div'>
    <div className='single-product-image'><img src={product.pic} /></div>
          <div className='detail-div'>
          <h1>{product.name}</h1>
          <h2>Rating</h2>
          <hr></hr>
              <table >
                  <tr>
                      <td>Model:</td>
                      <td>{product.name}</td>
                  </tr>
                  <tr>
                      <td>description:</td>
                      <td>{product.description}</td>
                  </tr>
                  <tr>
                      <td>Brand:</td>
                      <td>{product.name}</td>
                  </tr>
                  <tr>
                      <td>Type:</td>
                      <td>{product.type}</td>
                  </tr>
                  <tr>
                      <td>Availabilty:</td>
                      <td>{product.availability}</td>
                  </tr>
                  <tr>
                      <td>Size:</td>
                      <td>
                      <button>Small</button>
                          <button>Medium</button>
                          <button>Large</button>
                      
                      </td>
                  </tr>
                  <tr>
                      <td>Color</td>
                      <td>
                          <input type='color' value='#FF0000' disabled></input>
                          <input type='color' value='#D3D3D3' disabled></input>
                          <input type='color' disabled></input>
                      </td>
                  </tr>

                  <button className='order-btn'>Buy Now</button>
              </table>
          </div>
    </div>
      <DescriptionSection/>
      <SingleProductFooter/>
      </>
  )
};

export default SingleProduct;
