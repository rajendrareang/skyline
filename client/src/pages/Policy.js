import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy Skyline.com - Skyline Customer Service"}>
      <div  className="container">
        <div className="row" >
          <div className="col-md-8 offset-md-2">
            <h1><b><u>Privacy Policy of Skyline</u></b></h1>
            <p>Last Updated: <u>27/03/2023</u></p>
            <h4>1. Introduction</h4>
            <p>
              Welcome to Skyline's Privacy Policy. This document outlines how we
              collect, use, disclose, and protect your personal information when
              you interact with our website and services. By using our services,
              you agree to the practices described in this policy.
            </p>

            <h4>2. Information We Collect</h4>
            <p>
              We may collect the following types of information:
            </p>
            <ul>
              <li>
                <strong>Personal Information:</strong> This includes your name,
                email address, postal address, phone number, and payment
                information when you register, make a purchase, or contact us.
              </li>
              <li>
                <strong>Log Data:</strong> Our servers may automatically log
                information about your visit, including your IP address, browser
                type, pages visited, and other usage data.
              </li>
              <li>
                <strong>Cookies and Similar Technologies:</strong> We use
                cookies and similar tracking technologies to improve our services
                and personalize your experience. You can manage cookie
                preferences through your browser settings.
              </li>
              <li>
                <strong>Information You Provide:</strong> Any information you
                voluntarily submit to us, including reviews, comments, and
                feedback.
              </li>
            </ul>

            <h4>3. How We Use Your Information</h4>
            <p>
              We use your personal information for the following purposes:
            </p>
            <ul>
              <li>
                To process orders and provide customer support.
              </li>
              <li>
                To send transactional emails and updates.
              </li>
              <li>
                To improve our services and tailor them to your preferences.
              </li>
              <li>
                To monitor and analyze usage patterns.
              </li>
              <li>
                To communicate with you about promotions, updates, and other
                relevant information.
              </li>
            </ul>

            <h4>4. Information Sharing and Disclosure</h4>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information with:
            </p>
            <ul>
              <li>
                Trusted third-party service providers who assist us in
                delivering our services.
              </li>
              <li>
                Law enforcement or government authorities when required by law.
              </li>
              <li>
                Third parties in the event of a merger, acquisition, or business
                transfer.
              </li>
            </ul>

            <h4>5. Data Security</h4>
            <p>
              We take reasonable measures to protect your data from unauthorized
              access, disclosure, alteration, or destruction. However, no method
              of transmission over the internet or electronic storage is entirely
              secure.
            </p>

            <h4>6. Your Choices</h4>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>
                Access, correct, or delete your personal information.
              </li>
              <li>
                Opt-out of marketing communications.
              </li>
              <li>
                Disable cookies through your browser settings.
              </li>
            </ul>

            <h4>7. Children's Privacy</h4>
            <p>
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children.
            </p>

            <h4>8. Changes to this Privacy Policy</h4>
            <p>
              We may update this policy from time to time. Any changes will be
              posted on this page, and the revised policy will be effective
              immediately upon posting.
            </p>

            <h4>9. Contact Us</h4>
            <p>
              If you have questions, concerns, or requests regarding your personal
              information or this Privacy Policy, please contact us at <a href="#">www.help@skyline.com</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
