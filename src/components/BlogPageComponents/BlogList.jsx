import React from 'react';
import blogData from '../../data/blogdata';
import BlogCard from './BlogCards';
import Pagination from './Pagination';

const BlogList = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <Pagination/>
    </div>
  );
};

export default BlogList;
