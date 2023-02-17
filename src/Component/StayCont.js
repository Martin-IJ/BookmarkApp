import React from "react";

const StayCont = () => {
  return (
    <div className="container-fluid stayBgrc mt-5 d-flex justify-content-center">
      <div className="stayyy">
        <div className="py-5 page-cont text-center d-flex flex-column gap-3 text-light  emailCont">
          <p className="fs-4">35,000+ Already joined</p>
          <h2 className="fw-bold">Stay up-to-date with what we're doing</h2>
          <div className="row d-md-flex justify-content-md-between gap-3">
            <input
              type="email"
              placeholder="example@email.com"
              id="emailInp"
              className="col-12 col-md-8 p-3"
            />
            <button type="submit" className="col-12 col-md-3 btn text-light bg-danger p-3">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCont;
