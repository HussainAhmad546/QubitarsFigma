import React from 'react';
import { category } from "../../data/categoryPic";
import "../../styles/Allproductscss/category.css";

const ProductsCategory = () => {
    return (
        <>
        <h1 style={{width:'90%', margin:'auto'}}>Popular Categories</h1>
        <hr style={{width:'90%', margin:'auto',marginBottom:'20px'}}/>
        <div className='container d-flex'>
            {category.map((item) => (
                <div className='col-md-2 category-pic-div m-1' key={item.id}>
                    <img src={item.pic} alt={item.name} className="img-fluid"/>
                    <h4 className="text-center">{item.name}</h4>
                </div>
            ))}
        </div>
        </>
    );
};

export default ProductsCategory;

