import React from 'react'
import "../../styles/singleProduct/singleproduct.css"
import pic1 from "../../images/image 43.png"

const SingleProductsData = () => {
  return (
    <div className='single-product-detail-main-div'>
    <div className='single-product-image'><img src={pic1} /></div>
          <div className='detail-div'>
          <h1>Iphone Apple 13 pro Max</h1>
          <h2>Rating</h2>
          <hr></hr>
              <table >
                  <tr>
                      <td>Model:</td>
                      <td>13 Pro Max</td>
                  </tr>
                  <tr>
                      <td>description:</td>
                      <td>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</td>
                  </tr>
                  <tr>
                      <td>Brand:</td>
                      <td>Apple Original</td>
                  </tr>
                  <tr>
                      <td>Type:</td>
                      <td>Accessories/Phone</td>
                  </tr>
                  <tr>
                      <td>Availabilty:</td>
                      <td>InStock</td>
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
  )
}

export default SingleProductsData
