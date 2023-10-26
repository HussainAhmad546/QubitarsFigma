import React from 'react';
import '../../styles/Services.css';
import serviceHeader from '../../images/Services.png';

const Services = () => {
  return (
    <div className="service-header">
      <div className="row">
        <div className="col-md-6">
          <div className="service-details">
            <p className="service-word">Service</p>
            <h1>Large experience <br/>in sales</h1>
            <p>
              We have been working in the marketing sphere for more than 35 years. During this time, we successfully finished 10,000+ projects. Our company guarantees the quality that has been tested over the years.
            </p>
            <div class="service-search-container">
            <input type="text" class="service-Subsribe-box" placeholder="Enter email"/>
            <button class="service-button">Get a Free Qoute</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-image">
            <img
              src={serviceHeader}
              alt="Service Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
