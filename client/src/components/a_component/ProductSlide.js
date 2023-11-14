import React from 'react';
import ProductCard from './ProductCard';

const styles = {
  shoeSlide: {
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  productCard: {
    flex: '0 0 auto',
    marginRight: '10px',
  },
};

function ProductSlide() {
  const product1 = require('../../Assets/Products/product1.jpeg');
  const product2 = require('../../Assets/Products/product2.jpeg');
  const product3 = require('../../Assets/Products/product3.jpeg');
  const product4 = require('../../Assets/Products/product4.jpeg');
  const product5 = require('../../Assets/Products/product5.jpeg');
  const product6 = require('../../Assets/Products/product6.jpeg');
  const product7 = require('../../Assets/Products/product7.jpeg');
  const product8 = require('../../Assets/Products/product8.jpeg');
  const product12 = require('../../Assets/Products/product12.jpeg');

  return (
    <div className='slide'>
      <br/>
        <h1>You Might Also Like</h1>
      <div style={styles.shoeSlide}>
        <div className='product-card' style={styles.productCard}>
          <ProductCard
            imageSrc={product1}
            title="Product Name"
            description="product Nice Shoe"
            price="3599"
          />
        </div>
        <div className='product-card' style={styles.productCard}>
          <ProductCard
            imageSrc={product2}
            title="Product Name"
            description="product Nice Shoe"
            price="Free"
          />
        </div>
        <div className='product-card' style={styles.productCard}>
          <ProductCard
            imageSrc={product3}
            title="Product Name"
            description="product Nice Shoe"
            price="999"
          />
        </div>
        <div className='product-card' style={styles.productCard}>
          <ProductCard
            imageSrc={product4}
            title="Product Name"
            description="product Nice Shoe"
            price="599"
            productLink="/pdp1"
          />
        </div>
        <div className='product-card' style={styles.productCard}>
          <ProductCard
            imageSrc={product5}
            title="Product Name"
            description="product Nice Shoe"
            price="799"
          />
        </div>
        <div className='product-card' style={styles.productCard}>
          <ProductCard
            imageSrc={product6}
            title="Product Name"
            description="product Nice Shoe"
            price="1199"
          />
        </div>
        <div className='product-card' style={styles.productCard}>
          <ProductCard
            imageSrc={product7}
            title="Product Name"
            description="product Nice Shoe"
            price="259"
          />
        </div>
        <div className='product-card' style={styles.productCard}>
          <ProductCard
            imageSrc={product8}
            title="Product Name"
            description="product Nice Shoe"
            price="1125"
          />
        </div>
        <div className='product-card' style={styles.productCard}>
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
