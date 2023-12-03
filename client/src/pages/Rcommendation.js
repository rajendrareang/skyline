import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import ProductCard from "../components/ProductCard";
import "../styles/Homepage.css";

const RecommendationPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  // Retrieve filters from localStorage on component mount
  useEffect(() => {
    const storedChecked = JSON.parse(localStorage.getItem("checked")) || [];
    const storedRadio = localStorage.getItem("radio") || "";
    
    setChecked(storedChecked);
    setRadio(storedRadio);
  }, []);

  // Save filters to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("checked", JSON.stringify(checked));
    localStorage.setItem("radio", radio);
  }, [checked, radio]);

    // Filter by price
  const handlePriceFilter = (value) => {
    setRadio(value);
  };


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
    // Clear filters and reload the page
    const resetFilters = () => {
      localStorage.removeItem("checked");
      localStorage.removeItem("radio");
      window.location.reload();
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
  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  //load more products
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
  
  return (
    <Layout title={"Online Shopping Site in India for Mobiles, Smartphones, Clothing, Shoes, Slippers"}>
      <div className="container-fluid row mt-2 home-page justify-content-center">
      <h2 className="text-center recommended"><b><i>Recomended Products for You</i></b></h2>
        <div className="col-md-10">
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
         <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecommendationPage;
