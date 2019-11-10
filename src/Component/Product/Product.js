import React, { Component } from 'react';
import product from "../../product.png";
import AppBar   from "../AppBar/AppBar";
import "./Product.css";

class Product extends Component{
    render(){
    return(
    <div>
     <AppBar />
     <img className="photosize" src={product} alt="product" />
    </div>
    );
    }
}

export default Product;