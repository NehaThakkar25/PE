import React from "react";
import { Link } from "react-router-dom";
import Products from "../products/Products"

function BestSeller(props){
    return(
        <div className="product_item">
            <img src={props.image} alt="Product Image" className="product_img"/>
            <p className="product_name">{props.product_name}</p>
        </div>
    )
}

export default BestSeller;