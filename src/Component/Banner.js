import React from "react";
import Tab1 from "../Assets/illustration-hero.svg";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-md-row-reverse bannerImg page-cont">
        <div className="col-12 col-md-6 my-5 holdBck">
          <img src={Tab1} className="banImg" />
          <div className="blueBck d-flex gap-4"></div>
        </div>
        <div className="col-12 col-md-6 text-md-start bannerText">
          <h1 className="banh1Text">A simple bookmark manager</h1>
          <p className="prgText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            debitis ab maiores nobis veritatis rerum quas velit aliquam,
            voluptate assumenda.
          </p>
          <div className="btnGrp1 d-flex gap-4 justify-content-center">
            <button className="btn btnStyle bg-primary text-light">
              Get it on chrome
            </button>
            <button className="btn btnStyle bg-light">Get it on firefox</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
