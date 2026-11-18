import React from "react";
import "./home.css";
import man from "../../assets/Businessman Holding a Glowing Earth.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div id="home">
      <div className="leftHome">
        <div className="homedetails">
          <div className="line1"> I'am</div>
          <div className="line2">Aaditya Tyagi</div>
          <div className="line3">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "DSA With Java",
                2000,
                "Generative AI",
                2000,
                "Java",
                1000,
                "Python",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>
          <button>Hire me</button>
        </div>
      </div>

      <div className="rightHome">
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default Home;
