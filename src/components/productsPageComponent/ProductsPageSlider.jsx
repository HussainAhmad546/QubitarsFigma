import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import "../../styles/productspageslider.css"
import pic from "../../images/products.jpeg"

const ProductsPageSlider = () => {
  return (
      <div className='productsPage-slider-container'>
          <div className='pic-wrapper'>
          </div>
          <div className="text-div">
            <h4>New Collection</h4>
            <h1>Smart Phone</h1>
            <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to</h6>
            <button>Go to Collection</button>
          </div>
      </div>
  )
}

export default ProductsPageSlider
