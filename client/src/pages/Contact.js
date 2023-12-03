import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  const contactUS = require("../Assets/contactUS.jpg")
  return (
    <Layout title={"Online Shopping India | Buy Laptops, Speakers, Goceries "}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={contactUS}
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center"><b>CONTACT US</b></h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime we 24X7
            avaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@skyline.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
