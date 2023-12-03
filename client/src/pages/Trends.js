import CarouselSlide2 from "../components/a_component/CarouselSlide2";
import CategoryCard from "../components/CategoryCard";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import axios from "axios";
import Layout from "./../components/Layout/Layout";
import "../styles/TrendsPage.css";

const Trends = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  return (
    <Layout title={"Online Shopping Site in India for Mobiles, Smartphones, Clothing, Shoes, Slippers"}>

      <CarouselSlide2 />

      <div className="container-fluid row mt-2 trend-page">
        <div className="col-md-1"></div>
        <div className="col-md-10 ">
        <div className='a1z1'>
          <br /><br/>
          <h1>STEP INTO YOUR STYLE, STRIDE WITH CONFIDENCE</h1>
          <p>"To wear dreams on one's feet is to begin to give a reality to one's dreams." - Roger Vivier</p>
        </div>
        <div class="button-container">
          <Link to="/trendywear">
            <button class="a1z1-primary-button">Shop TrendyWear</button>
            </Link>
            <Link to="/formalwear">
            <button class="a1z1-secondary-button">Shop FormalWear</button>
            </Link>
            <br/><br/><br/><br/>
          </div>
             
        </div>
        <CategoryCard/>
        <div> <br/><br/><br/></div>
        <div className="trends-description">
   <h6><strong>The Trendsetting World of Skyline.com</strong></h6>
    <p>Welcome to the epicenter of trends, the online haven for the fashion-forward, the tech-savvy, and the lifestyle enthusiasts - Skyline.com. In a world that's constantly evolving, staying on top of the latest trends is not just a choice; it's a lifestyle, and Skyline.com is your gateway to the cutting edge of style and innovation.</p>

    <h6><strong>Unveiling Tomorrow's Fashion Today</strong></h6>
    <p>At Skyline.com, we believe in setting trends rather than following them. Our fashion collection is a carefully curated blend of avant-garde designs, emerging designers, and timeless classics. Whether you're into street style, haute couture, or casual chic, Skyline.com has the pieces that will turn heads and make a statement. Explore our virtual aisles to discover the future of fashion, waiting for you to embrace and showcase your unique style.</p>

    <h6><strong>Tech Trends Redefined</strong></h6>
    <p>Beyond fashion, Skyline.com is at the forefront of technology trends. From the latest in smartphones with cutting-edge features to state-of-the-art laptops, wearables, and home gadgets, we redefine what it means to stay connected and ahead in the digital age. Our tech-savvy customers can dive into a world of innovation, where every purchase is a step into the future.</p>

    <h6><strong>Lifestyle Elevated</strong></h6>
    <p>But trends aren't just about what you wear or the gadgets you carry; they're about how you live. Skyline.com brings you a lifestyle collection that transforms the ordinary into the extraordinary. Upgrade your living space with our modern furniture, transform your kitchen with the latest appliances, and add a touch of luxury to every corner of your life. Elevate your lifestyle with the trends that speak to you.</p>

    <h6><strong>Embrace the Unexpected</strong></h6>
    <p>What sets Skyline.com apart is our commitment to the unexpected. We celebrate individuality and the courage to embrace the unknown. Our trendsetters aren't afraid to step outside the norm and redefine what's possible. Join us in this journey of self-expression, where every purchase is a brushstroke on the canvas of your unique identity.</p>

    <h6><strong>The Skyline.com Experience</strong></h6>
    <p>Shopping at Skyline.com isn't just a transaction; it's an experience. Our user-friendly interface, seamless navigation, and exclusive trend guides ensure that you not only find what you're looking for but also discover something new and exciting along the way. We don't just follow trends; we create them, and we invite you to be a part of this trendsetting community.</p>

    <h6><strong>Join the Trendsetters</strong></h6>
    <p>Whether you're a fashionista, a tech enthusiast, or someone who simply appreciates the finer things in life, Skyline.com is where trends come to life. Join the trendsetters, the innovators, and the style mavens who call Skyline.com their ultimate destination. Redefine your world, one trend at a time.</p>

    <p><strong>Skyline.com - Setting Trends, Defying Limits.</strong></p>
</div>

      </div>
    </Layout>
  );
};

export default Trends;
