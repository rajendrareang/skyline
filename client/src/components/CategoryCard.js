import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoryCard.css';

const CategoryCard = () => {
    const image1 = require("../Assets/mens.jpg");
    const image2 = require("../Assets/womens.jpg");
    const image3 = require("../Assets/Kids.jpg");

    return (
        <div className='catergory-trends'>
            <div className="col-md-3 category-card-trends">
                <img src={image1} alt="Category Image" />
                <Link to="/men-collection">
                    <button className="visit-button"><span className='skew-fix'>Visit Men's Collection</span></button>
                </Link>
            </div>
            <div className="col-md-3 category-card-trends">
                <img src={image2} alt="Category Image" />
                <Link to="/women-collection">
                    <button className="visit-button"><span className='skew-fix'>Visit Women's Collection</span></button>
                </Link>
            </div>
            <div className="col-md-3 category-card-trends">
                <img src={image3} alt="Category Image" />
                <Link to="/kids-collection">
                    <button className="visit-button"><span className='skew-fix'>Visit Kid's Collection</span></button>
                </Link>
            </div>
        </div>
    );
}

export default CategoryCard;
