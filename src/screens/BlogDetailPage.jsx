import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../data/blogdata';
import '../styles/Blogs.css';
import { FaUser } from 'react-icons/fa';
import calendor from '../images/Calendor.png';
import { FaSearch } from 'react-icons/fa';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons'; 
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'

const BlogDetail = () => {
  const { id } = useParams();
  const blogId = parseInt(id);
  const blog = blogData.find((item) => item.id === blogId);

  const navigate = useNavigate();

  const popularPosts = blogData.filter((item) => item.popular);
  const categories = Array.from(new Set(blogData.map((item) => item.category)));

  const goToPreviousBlog = () => {
    const previousId = blog.id - 1;
    navigate(`/blog/${previousId}`);
  };

  const goToNextBlog = () => {
    const nextId = blog.id + 1;
    navigate(`/blog/${nextId}`);
  };

  return (
    <div className=" my-4 custom-container">
      <div className="row">
        <div className="col-md-8">
          <img src={blog.image} alt={blog.title} className="card-img-top" />
          <div className='d-flex justify-content-between'>
            <div>
              <FaUser className="person-icon" /> {blog.author}
            </div>
            <div>
              <img src={calendor} alt="" height={15} style={{marginRight:'10px'}}/>{blog.date}
            </div>
          </div>
          <h3>{blog.title}</h3>
          <p>{blog.paragraphDetails}</p>
          <div className='d-flex justify-content-between'>
            <div className="tags d-flex">
                <h3>Tags</h3>
                <ul className="tags-list">
                <li>IT</li>
                <li>Technology</li>
              </ul>
            </div>
            {/* <div className="share d-flex">
                <h3>Share</h3>
                <IconContext.Provider value={{ color: '#F7941D', size: '3rem' }}>
                <FaWhatsapp />
                <FaFacebook />
                <FaInstagram />
              </IconContext.Provider>
            </div> */}
                <div className="share d-flex">
                  <h3>Share</h3>
                  <IconContext.Provider value={{ color: '#F7941D', size: '2rem' }}>
                    <div className="icon-container">
                      <FaWhatsapp />
                    </div>
                    <div className="icon-container">
                      <FaFacebook />
                    </div>
                    <div className="icon-container">
                      <FaInstagram />
                    </div>
                  </IconContext.Provider>
                </div>
          </div>
          <hr/>
          <div className="d-flex justify-content-between">
            <div>
            <AiFillCaretLeft color="orange"/>
            <button
              onClick={goToPreviousBlog}
              disabled={blog.id === 1} 
              className="blog-button"
            >
              Previous Blog
            </button>
            </div>
            <div>
            <button
              onClick={goToNextBlog}
              disabled={blog.id === blogData.length}
              className="blog-button"
            >
              Next Blog
            </button>
            <AiFillCaretRight color="orange"/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="right-side-widgets">
            <div class="blog-search-container mb-4">
              <input type="text" class="blog-search-box" placeholder="Search Post.."/>
              <button class="blog-search-button"><FaSearch/></button>
            </div>
            <div className="widget popular-posts-widget">
              <h3 className="widget-heading">Popular Posts</h3>
              <ul className="popular-posts-list">
                {popularPosts.map((post) => (
                  <li key={post.id} className="popular-post d-flex">
                    <div className="popular-post-image">
                      <img src={post.image} alt={post.title} height={50} width={60}/>
                    </div>
                    <div className="popular-post-details">
                      <h4 style={{fontSize:'13px', fontWeight:'bold'}}>{post.title}</h4>
                      <p className="post-date">
                        <img src={calendor} alt="" height={15} style={{marginRight:'10px'}}/>
                        {post.date}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="widget categories-widget">
              <h3 className="widget-heading">Categories</h3>
              <ul className="categories-list">
                {categories.map((category) => (
                  <div key={category} className="category-item">
                    {category}
                  </div>
                ))}
              </ul>
            </div>
            <div className="widget tags-widget">
              <h3 className="widget-heading">Tags</h3>
              <ul className="tags-list">
                <li>IT</li>
                <li>Technology</li>
                <li>Marketing</li><br/><br/>
                <li>IT</li>
                <li>Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

