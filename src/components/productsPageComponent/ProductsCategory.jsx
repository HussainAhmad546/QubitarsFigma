import React from 'react';
import { category } from "../../data/categoryPic";
import "../../styles/Allproductscss/category.css";

const ProductsCategory = () => {
    return (
        <div className='category-main'> 
            {category.map((item) => (
                <div className='category-pic-div' key={item.id}> 
                    <img src={item.pic} alt={item.name} /> 
                    <h4>{item.name}</h4> 
                </div>
            ))}
        </div>
    );
};

export default ProductsCategory;
