import React from 'react';
import BlogList from '../components/BlogPageComponents/BlogList';
import '../styles/Blogs.css';

const OurBlog = () => {
  return (
    <>
      <div className="our-blog">
        <div className="container text-center">
          <h1>Our Blog</h1>
          <p>
            You offer a good product, make advertising, analyze the market but <br />
            still have no improvement
          </p>
        </div>
      </div>
      <BlogList />
    </>
  );
};

export default OurBlog;

