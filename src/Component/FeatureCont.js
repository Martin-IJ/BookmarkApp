import React from "react";
import Tab2 from "../Assets/illustration-features-tab-1.svg";

const FeatureCont = () => {
  return (
    <div className="container-fluid">
      <div className="features text-center mt-4 pt-5 page-cont">
        <div className="ftText">
          <h1 className="banh1Text">Features</h1>
          <div className="ftPtext">
            <p className="prgText featuresP">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
              provident quae assumenda consectetur delectus quam fugit
              temporibus quisquam maiores labore.
            </p>
          </div>
        </div>

        <div className="simBookmark">
          <div className="ttlWrap">
            <div className="d-sm-flex justify-content-sm-around ttlMainWrap">
              <h2 className="pb-3 mb-3 border-bottom border-dark">
                <span className="ftSpan">Simple Bookmarking</span>
              </h2>
              <h2 className="pb-3 mb-3 border-bottom border-dark">
                <span className="ftSpan">Speedy Searching</span>
              </h2>
              <h2 className="pb-3 mb-3 border-bottom border-dark">
                <span className="ftSpan">Easy Sharing</span>
              </h2>
            </div>
          </div>
          <div className="row imgAndText mt-5 pt-4 text-md-start">
            <div className="col-12 col-md-6 holdBck">
              <img src={Tab2} className="tab2img" />
              <div className="ftContBck"></div>
            </div>
            <div className="col-12 col-md-5 ms-md-5 mt-5">
              <h1 className="banh1Text">Bookmark in one click</h1>
              <p className="prgText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                odio esse illo eligendi ut harum porro ipsa voluptas officiis
                reiciendis?
              </p>
              <button className="btn d-none d-md-block bg-primary text-light px-5 py-3">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCont;
