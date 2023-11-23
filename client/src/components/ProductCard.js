// ProductCard.js

import React from "react";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  const addToCart = () => {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success("Item Added to cart");
  };

  return (
    <div className="card m-2" key={product._id}>
      <img
        src={`/api/v1/product/product-photo/${product._id}`}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <div className="card-name">
        
          <h5 ><strong>{product.name}</strong></h5>
          </div>

        <p className="card-text ">{product.description.substring(0, 60)}...</p>
        <div className="card-price">
          <h6><strong>
             MRP: {product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
            </strong>
          </h6>
          <p></p>
        </div>
        <div className="card-name-price">
          <button
            className="btn btn-outline-dark"
            onClick={() => navigate(`/product/${product.slug}`)}
          >
            More Details
          </button>

          <button className="btn btn-dark ms-1" onClick={addToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
