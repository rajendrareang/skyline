import React from 'react';
import ProductCard from './ProductCard';


function ProductSlide() {
  const product1 = require('../assests/products/product1.jpeg');
  const product2 = require('../assests/products/product2.jpeg');
  const product3 = require('../assests/products/product3.jpeg');
  const product4 = require('../assests/products/product4.jpeg');
  const product5 = require('../assests/products/product5.jpeg');
  const product6 = require('../assests/products/product6.jpeg');
  const product7 = require('../assests/products/product7.jpeg');
  const product8 = require('../assests/products/product8.jpeg');
  const product12 = require('../assests/products/product12.jpeg');


  return (
<div className='slide'>
<div className='Title-ShoeSlide'>
<h1>You Might Also Like</h1>
         
</div>

        <div className='shoeSlide'>
 
    <div className="product-card">
    <ProductCard
        imageSrc={product1}
        title="Product Name"
        description="product Nice Shoe"
        price="3599"
      />

    </div>
    <div className="product-card">
    <ProductCard
        imageSrc={product2}
        title="Product Name"
        description="product Nice Shoe"
        price="Free"
      />

    </div>
    <div className="product-card">
    <ProductCard
        imageSrc={product3}
        title="Product Name"
        description="product Nice Shoe"
        price="999"
      />

    </div>
    <div className="product-card">
    <ProductCard
        imageSrc={product4}
        title="Product Name"
        description="product Nice Shoe"
        price="599"
        productLink="/pdp1"
      />

    </div>
    <div className="product-card">
    <ProductCard
        imageSrc={product5}
        title="Product Name"
        description="product Nice Shoe"
        price="799"
      />

    </div>
    <div className="product-card">
    <ProductCard
        imageSrc={product6}
        title="Product Name"
        description="product Nice Shoe"
        price="1199"
      />

    </div>
    <div className="product-card">
    <ProductCard
        imageSrc={product7}
        title="Product Name"
        description="product Nice Shoe"
        price="259"
      />

    </div>
    <div className="product-card">
    <ProductCard
        imageSrc={product8}
        title="Product Name"
        description="product Nice Shoe"
        price="1125"
      />

    </div>
    <div className="product-card">
    <ProductCard
        imageSrc={product12}
        title="Product Name"
        description="product Nice Shoe"
        price="2125"
        productLink="/pdp12"
      />

    </div>

         </div>
         </div>
  );
}

export default ProductSlide;
