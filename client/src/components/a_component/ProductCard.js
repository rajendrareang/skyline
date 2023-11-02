import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageSrc, title, description, price, productLink }) => {
  const cardStyle = {
    width: '15rem',
    margin: '21px 1px',
    height: '21rem',
    textDecoration: 'none',
    color: '#000',
  };
  const cardTextStyle = {
    color: '#a4a4a4',
    fontSize: '1rem',
  };
  const titleStyle = {
    margin: '1px 0', // Reduce margin for the title
  };
  const descriptionStyle = {
    margin: '1px 0', // Reduce margin for the description
  };
  const priceStyle = {
    margin: '1px 0', // Reduce margin for the price
  };

  cardStyle[':hover'] = {
    border: '2px solid black', 
  };
  return (
    <Link to={productLink} className="card" style={cardStyle}>
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <p className="card-title" style={titleStyle}>{title}</p>
        <p className="card-text" style={{ ...cardTextStyle, ...descriptionStyle }}>{description}</p>
        <p className="card-price" style={{  ...priceStyle }}>₹{price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
