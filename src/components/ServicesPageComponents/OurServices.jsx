import React from 'react';
import '../../styles/Services.css';

const OurServices = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Our Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 service-card-1">
            <div className="card-body">
              <h5 className="card-title">Management</h5>
              <p className="card-text">You offer a good product, make advertising, analyze the market but still have no improvement</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 service-card">
            <div className="card-body">
              <h5 className="card-title">Finance Holders</h5>
              <p className="card-text">You offer a good product, make advertising, analyze the market but still have no improvement</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 service-card-1">
            <div className="card-body">
              <h5 className="card-title">Accounting OP</h5>
              <p className="card-text">You offer a good product, make advertising, analyze the market but still have no improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
