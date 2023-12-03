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
import "../styles/Homepage.css";

const Novel = () => {
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
      <div className="container-fluid row mt-2 home-page">
        <div className="col-md-2 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.slice(0, 9).map((c) => (
              <Checkbox
                key={c._id}
                checked={checked.includes(c._id)}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
                style={{ fontWeight: checked.includes(c._id) ? 'bold' : 'normal', color: checked.includes(c._id) ? 'blue' : 'black' }}
             
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-3">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => handlePriceFilter(e.target.value)}>
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
              onClick={resetFilters}
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
       
       
      </div>
    </Layout>
  );
};

export default Novel;
