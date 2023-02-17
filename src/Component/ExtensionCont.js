import React from "react";
import Chrome from "../Assets/logo-chrome.svg";
import Firefox from "../Assets/logo-firefox.svg";
import Opera from "../Assets/logo-opera.svg";
import DottedImg from "../Assets/bg-dots.svg";

const ExtensionCont = () => {
  return (
    <div className="container mt-md-5">
      <div className="dwnExtention page-cont text-center">
        <h1 className="banh1Text">Download the Extension</h1>
        <div className="ftPtext">
          <p className="prgText featuresP">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            deleniti modi, facilis minus hic cum!
          </p>
        </div>
        <div className="row browserCont d-flex justify-content-center gap-5">
          <div className="col-9 col-md-5 col-lg-3 browser">
            <img src={Chrome} alt="" />
            <h2 className="browserName">Add to Chrome</h2>
            <p className="browserVersion">Minimum Version 62</p>
            <img src={DottedImg} className="dottedLine" />
            <button className="btn bg-primary text-light">
              Add & Install Extention
            </button>
          </div>
          <div className="col-9 col-md-5 col-lg-3 mt-lg-3 browser">
            <img src={Firefox} alt="" />
            <h2 className="browserName">Add to Firefox</h2>
            <p className="browserVersion">Minimum Version 62</p>
            <img src={DottedImg} className="dottedLine" />
            <button className="btn bg-primary text-light">
              Add & Install Extention
            </button>
          </div>
          <div className="col-9 col-md-5 col-lg-3 mt-lg-5 browser">
            <img src={Opera} alt="" />
            <h2 className="browserName">Add to Opera</h2>
            <p className="browserVersion">Minimum Version 62</p>
            <img src={DottedImg} className="dottedLine" />
            <button className="btn bg-primary text-light">
              Add & Install Extention
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionCont;
