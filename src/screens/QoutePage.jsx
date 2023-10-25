import React from 'react';
import '../styles/ContactUs.css';

const QuotePage = () => {
  return (
    <>
      <div className="our-blog">
        <div className="container text-center">
          <h1>Get a Quote</h1>
          <p>
            You offer a good product, make advertising, analyze the market but
            <br />
            still have no improvement
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="qoute-container">
          <div className="contact-us-right">
            <div className="custom-input-group">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="custom-input-group">
              <input type="tel" placeholder="Your Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea rows="5" placeholder="Your Message"></textarea>
            <button className="submit-button">Submit</button>
          </div>
          <div className="contact-us-left">
            <h2 className="contact-us-heading">Address:</h2>
            <p className="paragrapgh">
              4035 Heavens,
              <br />
              Los Angeles, California
            </p>
            <h2 className="contact-us-heading">Phone Number:</h2>
            <p className="paragrapgh">+000 313 577 111</p>
            <p className="paragrapgh">+000 313 577 222</p>
            <h2 className="contact-us-heading">Email:</h2>
            <p className="paragrapgh">info@example.com</p>
            <p className="paragrapgh">support@example.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotePage;
