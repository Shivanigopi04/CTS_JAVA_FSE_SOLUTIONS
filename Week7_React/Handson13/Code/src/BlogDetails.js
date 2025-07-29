// src/BlogDetails.js
import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <div>
      <h2>📝 Blog List</h2>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div key={blog.id}>
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default BlogDetails;
