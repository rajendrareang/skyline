import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/Developers.css";

const Developers = () => {
    const rajen = require("../Assets/rajen.jpg");
    const defaultPic1 = require("../Assets/default-friend1.jpeg");
    const defaultPic = require("../Assets/defualt-friend.jpeg");
    const avinash = require("../Assets/avinash.jpeg");
    const samik = require("../Assets/samik.jpeg");
  return (
    <Layout title={"Developers | Skyline.com"}>
      <div className="developers ">
      <div className="container">
        <div className="row">
            <h2 className="developer-h2">Meet Our Team,</h2>
            <div className="col-md-6">
            {/* Team Member 1 */}
            <div className="team-member">
              <img src={rajen} alt="Rajendra Reang" />
              <h4><b>Rajendra Reang</b></h4>
              <p className="dev-border">
                Enrollment Number: 19UCS076<br/>
                Registration Number: 1910836<br/>
                Contact: 8416033821<br/>
                E-mail: therajendrareang@gmail.com<br/>
              </p>
              {/* Add more details about Rajendra Reang */}
            </div>
       

       
            {/* Team Member 2 */}
            <div className="team-member">
              <img src={avinash} alt="Ubidi Avinash" />
              <h4><b>Ubidi Avinash</b></h4>
              <p className="dev-border">
                Enrollment Number: 20UCS174<br/>
                Registration Number: 2012789<br/>
                Contact: 9014340186<br/>
                E-mail: avinashubidi@gmail.com<br/>
              </p>
              {/* Add more details about Ubidi Avinash */}
            </div>
          </div>

          <div className="col-md-6">
            {/* Team Member 3 */}
            <div className="team-member">
              <img src={defaultPic1} alt="Bhukya Vasant" />
              <h4><b>Bhukya Vasanth Kumar</b></h4>
              <p className="dev-border">
                Enrollment Number: 19UCS138<br/>
                Registration Number: 1911366<br/>
                Contact: 9390385534<br/>
                E-mail: vasanth2440@gmail.com<br/>
              </p>
              {/* Add more details about Bhukya Vasant */}
            </div>
          
            {/* Team Member 4 */}
            <div className="team-member">
              <img src={samik} alt="Samik Das" />
              <h4><b>Samik Das</b></h4>
              <p className="dev-border">
                Enrollment Number: 20UCS024<br/>
                Registration Number: 2012540<br/>
                Contact: 9863300704<br/>
                E-mail: samiksrd2017@gmail.com<br/>
              </p>
              {/* Add more details about Samik Das */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Developers;
