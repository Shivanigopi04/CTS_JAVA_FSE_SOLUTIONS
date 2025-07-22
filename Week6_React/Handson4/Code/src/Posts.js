// src/Posts.js
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Method to fetch posts
  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const postList = data.map(post => new Post(post.userId, post.id, post.title, post.body));
      this.setState({ posts: postList });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  // Called after component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary for child component failures
  componentDidCatch(error, info) {
    alert("An error occurred: " + error.toString());
    console.error("Error caught in componentDidCatch: ", info);
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
