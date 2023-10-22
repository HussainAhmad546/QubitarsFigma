import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../styles/Blogs.css'

const BlogCard = ({ blog }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3 blog-card">
        <img src={blog.image} alt={blog.title} className="card-img-top" />
        <div className="card-body body-card">
          <h5 className="card-title text-center">{blog.title}</h5>
          <p className="card-text text-center">{blog.paragraph}</p>
          <p className="card-details">
            <FaUser className="person-icon" /> {blog.author} <span className="separator">|</span> {blog.date}
          </p>
          <button className="btn btn-block">Continue Reading</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

