/* eslint-disable no-unused-vars */
import React from "react";
import scroll from "./icons/scroll-white.png";
import redux from "./icons/icons8-redux-100.png";
import redux1 from "./icons/icons8-redux-100-3.png";
import redux2 from "./icons/icons8-redux-100-2.png";
import react from "./icons/icons8-react-native-100.png";
import react1 from "./icons/icons8-react-native-100-2.png";
import react2 from "./icons/icons8-react-100.png";
import node from "./icons/icons8-nodejs-100.png";
import mongo from "./icons/icons8-mongodb-100.png";
import js from "./icons/icons8-javascript-100.png";
import html from "./icons/icons8-javascript-100-2.png";
import fb from "./icons/icons8-firebase-100.png";
import css from "./icons/icons8-css3-100.png";
import bs from "./icons/icons8-bootstrap-100.png";

const Hero = () => {
  return (
    <div className="container-fluid hero">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-md-5 col-12 hero__text col">
              <h1 className="mb-5">
                Hi, i'm Raj <br />
                <h5 className="mt-2">
                  FullStack Developer <span className="emoji">🖱️</span>
                </h5>
              </h1>
              <p>
                <span className="p_tag"> &lt; p &gt;</span>
                through costant learning & practice and Learning produce
                aesthetic web frontend to high standrad
                <span className="p_tag"> &lt; p &gt;</span>
              </p>
            </div>

            <div className="col-md-5 col-12 hero__img col">
              <div className="position-relative">

              <img  className="fb" src={fb} alt="" />
              <img className="react" src={react} alt="" />
              <img className="js" src={js} alt="" />
              <img className="redux" src={redux} alt="" />
              
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#883df8"
                  d="M49.2,-40.6C59.8,-26,61.7,-5.7,56.9,12.1C52.1,29.9,40.7,45.3,25.4,52.4C10.2,59.6,-8.7,58.6,-29.6,52.1C-50.6,45.7,-73.4,33.8,-78.8,16.3C-84.2,-1.3,-72.1,-24.5,-56,-40.4C-40,-56.3,-20,-64.9,-0.3,-64.6C19.3,-64.3,38.6,-55.3,49.2,-40.6Z"
                  transform="translate(100 100)"
                />
              </svg>
              </div>
            </div>

          <div className="scroll">
            <img  src={scroll} alt="" className="float-start"/>
            <p className="text-white"> scroll down <i class="fa fa-arrow-down text-white" aria-hidden="true"></i></p>
           
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
