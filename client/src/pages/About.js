import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  const aboutImg = require("../Assets/skyline.jpeg");
  return (
    <Layout title={"Skyline pvt. ltd. Corporation"}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={aboutImg}
              alt="About Skyline"
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-md-6">
            <h1><b><u>About Skyline</u></b></h1>
            <p className="text-justify mt-2">
              Welcome to Skyline, where online shopping meets excellence and convenience. At Skyline, we're more than just an e-commerce platform; we're a passionate team of individuals committed to bringing you a curated collection of the finest products that elevate your lifestyle.
              <br /><br />
              Our journey began with a simple idea: to create a seamless and enjoyable shopping experience that connects you with quality and innovation. As a company built on integrity and a customer-first approach, we've grown into a trusted destination for those seeking superior products, from fashion and electronics to home decor and beyond. We take pride in our dedication to exceptional service, ensuring your satisfaction with each purchase.
              <br /><br />
              Explore our digital storefront, discover the latest trends, and become a part of the Skyline community. Thank you for choosing us for your shopping needs. Your journey to a better, brighter future begins here.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
