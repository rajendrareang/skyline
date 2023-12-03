import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const KidsCollection = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Kids"); // Hardcoded category name

  useEffect(() => {
    getProductsForWomenCategory();
  }, []);

  const getProductsForWomenCategory = async () => {
    try {
      const { data } = await axios.get(
        "/api/v1/product/product-category/kids" // Hardcoded category slug
      );
      setProducts(data?.products);
      // Note: You can remove setting the category state if it's not needed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center"><b>Kids' Collection</b></h4>
        {/* <h6 className="text-center">{products?.length} results found</h6> */}
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
            {/* Additional content or buttons can be added here */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KidsCollection;
