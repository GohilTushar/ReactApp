import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center justify-content-center flex-column">
                  {props.name}
                  <h2 className="my-3">we are team of talented developer</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className='btn btn-success'>{props.btname}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                  <img src={props.image} className="image-fluid animate" style={{ height: '360px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Common;
