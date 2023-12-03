import React from "react";
import Layout from "../components/Layout/Layout";
import { useSearch } from "../context/search";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [values, setValues] = useSearch();

  return (
    <Layout title={"Search results | Skyline.com Buy Products Online"}>
      <div className="container ">
        <div className="col-md-12">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length} Products`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
