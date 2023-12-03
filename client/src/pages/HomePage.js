import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import ProductCard from "../components/ProductCard";
import CarouselSlide from "../components/a_component/CarouselSlide";
import "../styles/Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <Layout title={"Online Shopping Site in India for Mobiles, Smartphones, Clothing, Shoes, Slippers"}>

      <CarouselSlide />

      <div className="container-fluid row mt-2 home-page">
        <div className="col-md-2 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.slice(0, 9).map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-3">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-dark"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-10 ">
          <h1 className="text-center"></h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
         <ProductCard key={p._id} product={p} />
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
       
        <div className="description">
          <br/><h6><strong>Skyline.com: Your Ultimate Shopping Destination</strong></h6>
<p>E-commerce is transforming the way we shop, and at Skyline.com, we're here to revolutionize your shopping experience. Why waste time hopping from one store to another in search of the latest products when you can find everything you need with a simple click? Skyline.com offers a diverse and extensive range of products to cater to all your needs and desires.</p>

<h6><strong>Unmatched Product Variety</strong></h6>
<p>Skyline.com is your one-stop shop for all your shopping needs. From cutting-edge electronics like smartphones, laptops, tablets, and accessories to the latest in fashion trends, including clothing, shoes, and lifestyle accessories, we've got it all. Looking to upgrade your living space? We offer modern furniture like sofas, dining tables, and wardrobes. Our selection also includes appliances that make your life easier, such as washing machines, TVs, ACs, mixer grinder juicers, and other time-saving kitchen gadgets. For your home decor needs, we offer everything from cushion covers and mattresses to bedsheets, as well as a variety of toys and musical instruments. Whatever you're looking for, you can be confident you'll find it right here.</p>

<h6><strong>Shop at Your Convenience</strong></h6>
<p>At Skyline.com, we understand that your life doesn't always follow a 9 to 5 schedule. That's why we never close. You can shop in your PJs, late at night, or in the early hours of the morning—whenever it's most convenient for you.</p>

<h6><strong>Irresistible Prices</strong></h6>
<p>What sets Skyline.com apart are our year-round shopping festivals and events, featuring prices that are simply irresistible. You'll often find yourself picking up more than you initially planned. If you're wondering why you should choose Skyline.com when there are numerous other options available to you, read on.</p>

<h6><strong>Skyline Rewards</strong></h6>
<p>At Skyline.com, we value your loyalty, which is why we've launched Skyline Rewards, a loyalty program that rewards our regular customers. It's completely free to join, and all you need is a certain number of points to become a member. When you shop with us, you'll earn points that can be redeemed for a variety of exciting services, including memberships, discounts, and more. Our Plus members enjoy exclusive benefits like free delivery, early access during sales and shopping festivals, exchange offers, and priority customer service. In short, the more you shop, the more you earn!</p>

<h6><strong>No Cost EMI</strong></h6>
<p>We believe in making high-end products accessible to everyone. Our No Cost EMI plan allows you to shop for select mobiles, laptops, appliances, and more without paying any processing fees. This makes it easy to get the products you desire without breaking the bank.</p>

<h6><strong>EMI on Debit Cards</strong></h6>
<p>Skyline.com is committed to making online shopping accessible to all. That's why we offer EMI on Debit Cards, giving you the freedom to shop without worrying about monthly cash flow interruptions. We've partnered with leading banks to provide this facility, so you can shop confidently with us.</p>

<h6><strong>Product Exchange Offers</strong></h6>
<p>Upgrade to the latest gadgets without breaking the bank. Skyline.com offers instant discounts when you exchange your old products for new ones. Our experts will calculate the value of your old item, provided it's in good working condition and screen damage-free. If a product is eligible for an exchange offer, you'll see the 'Buy with Exchange' option on the product description. Be smart and opt for an exchange whenever possible.</p>

<h6><strong>Discover a World of Possibilities at Skyline.com</strong></h6>
<p>Whatever you need, you'll find it at Skyline.com. From cutting-edge Mobile Phones to Electronic Devices and Accessories, Large Appliances, Small Home Appliances, Lifestyle products, Home and Furniture, Baby and Kids essentials, Books, Sports and Games, and even Grocery/Supermart items, we've got you covered.</p>

<p><strong>Skyline.com is dedicated to providing a seamless and enjoyable online shopping experience, ensuring you have access to the best products, competitive prices, and top-notch customer service. Shop with us today and redefine your shopping experience.</strong></p>
</div>
      </div>
    </Layout>
  );
};

export default HomePage;
