import React from 'react';
import {LiaAwardSolid} from 'react-icons/lia'
import {TfiHeadphoneAlt, TfiMedall} from 'react-icons/tfi'
import {RiTeamFill} from 'react-icons/ri'

const OurFeatures = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Our Features</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic nostrum magni nulla quos laudantium temporibus non, consequuntur similique minus quaerat repellat, modi tenetur earum quae mollitia, facilis adipisci ipsa.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 feature-card">
            <div className="card-body d-flex">
              <LiaAwardSolid className="feature-icon" size={80} color="black" />
              <div className="text-right ml-2">
                <h5 className="card-title">Proper Planning</h5>
                <p className="card-text">
                Finance is a general term meaning the art and science to form objects, systems, or organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 feature-card">
            <div className="card-body d-flex certified-company">
            <LiaAwardSolid className="feature-icon" size={80} color="black" />
              <div className="text-right ml-2">
                <h5 className="card-title">Certified Company</h5>
                <p className="card-text">
                Finance is a general term meaning the art and science to form objects, systems, or organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 feature-card">
            <div className="card-body d-flex">
            <LiaAwardSolid className="feature-icon" size={80} color="black" />
              <div className="text-right ml-2">
                <h5 className="card-title">Creative Strategy</h5>
                <p className="card-text">
                Finance is a general term meaning the art and science to form objects, systems, or organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 feature-card">
            <div className="card-body d-flex">
            <TfiMedall className="feature-icon" size={60} color="black" />
              <div className="text-right ml-2">
                <h5 className="card-title">Awarded Company</h5>
                <p className="card-text">
                Finance is a general term meaning the art and science to form objects, systems, or organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 feature-card">
            <div className="card-body d-flex">
            <RiTeamFill className="feature-icon" size={60} color="black" />
              <div className="text-right ml-2">
                <h5 className="card-title">Expert Team</h5>
                <p className="card-text">
                Finance is a general term meaning the art and science to form objects, systems, or organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 feature-card">
            <div className="card-body d-flex">
            <TfiHeadphoneAlt className="feature-icon" size={60} color="black" />
              <div className="text-right ml-2">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">
                Finance is a general term meaning the art and science to form objects, systems, or organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFeatures;
