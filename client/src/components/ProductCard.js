import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import "../styles/Card.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  const addToCart = () => {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success("Item Added to cart");
  };

  return (
    <div className="card m-2 product-card" key={product._id}>
      <img
        src={`/api/v1/product/product-photo/${product._id}`}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <div className="card-name-price">
          <h5 className="card-title">{product.name}</h5>
        </div>
        <p className="card-text ">{product.description.substring(0, 60)}...</p>
        <div className="card-name-price">
        <h6 className="card-title card-price">MRP: {product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </h6>
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
