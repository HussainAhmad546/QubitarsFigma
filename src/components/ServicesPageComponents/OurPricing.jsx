import React from 'react';
import {BsCheckCircleFill} from 'react-icons/bs'
import {TfiCup} from 'react-icons/tfi'
import {MdRocketLaunch} from 'react-icons/md'
import {GrDiamond} from 'react-icons/gr'
import {AiOutlineExclamationCircle} from 'react-icons/ai'

const OurPricing = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Our Pricing</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
        consequatur facilis quas voluptatem exercitationem tempora.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
              <p className="Plan-title-1 mb-0">Starting Plan</p>
            <div className="card-body text-left">
              <div className='d-flex'>
              <TfiCup className="pricing-icon" size={60}/>
              <h3 className='price'>$19<small>/month</small></h3>
              </div>
              <p className="card-text text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <hr/>
              <ul className="list-unstyled">
                <li>
                  <BsCheckCircleFill className="list-icon" /> Full Access to Landingfolio{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> 100 GB Free Storage{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> Unlimited Visitors{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> 10 Agents{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> Live Chat Support{' '}<AiOutlineExclamationCircle/>
                </li>
              </ul>
              <button className="starting-plan-button">Get 14 days free trial</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
              <p className="Plan-title-2 mb-0">Gold Plan</p>
            <div className="card-body text-left gold-plan">
              <div className='d-flex'>
              <MdRocketLaunch className="pricing-icon" size={60} color='white'/>
              <h3 className='price'>$19<small>/month</small></h3>
              </div>
              <p className="card-text text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <hr/>
              <ul className="list-unstyled">
                <li>
                  <BsCheckCircleFill className="list-icon" /> Full Access to Landingfolio{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> 100 GB Free Storage{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> Unlimited Visitors{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> 10 Agents{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> Live Chat Support{' '}<AiOutlineExclamationCircle/>
                </li>
              </ul>
              <button className="gold-plan-button">Get 14 days free trial</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
          <p className="Plan-title-3 mb-0">Diamond Plan</p>
            <div className="card-body text-left">
              <div className='d-flex'>
              <GrDiamond className="pricing-icon" size={60}/>
              <h3 className='price'>$19<small>/month</small></h3>
              </div>
              <p className="card-text text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <hr/>
              <ul className="list-unstyled">
                <li>
                  <BsCheckCircleFill className="list-icon" /> Full Access to Landingfolio{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> 100 GB Free Storage{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> Unlimited Visitors{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> 10 Agents{' '}<AiOutlineExclamationCircle/>
                </li>
                <li>
                  <BsCheckCircleFill className="list-icon" /> Live Chat Support{' '}<AiOutlineExclamationCircle/>
                </li>
              </ul>
              <button className="starting-plan-button">Get 14 days free trial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
