import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ marginTop: "60px", minHeight: "100vh" }}>
        <Toaster />

        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Online Shopping site Skyline.com Shop Now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb, skyline, shopping, ecommerce, mobiles, laptop, groceries",
  author: "Rajendra Reang",
};

export default Layout;
