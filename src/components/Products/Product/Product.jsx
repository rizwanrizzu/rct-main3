import React from "react";
import axios from "axios";
import { useState,useEffet } from "react";

const Product = () => {
  // Note: this id should come from api
  const [items,setItems]=React.useState([])
  
  useEffet(()=>{
    axios.get("http://localhost:8080/products").then((res)=>{
      let data = res.data
      setItems(data)
    })
  },[])
   console.log(items)


  return (
   
    

    <div data-cy={`product-${elem.id}`}>
      <h3 data-cy="product-name"></h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};



export default Product;
