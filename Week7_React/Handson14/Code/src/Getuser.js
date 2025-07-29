// src/Getuser.js
import React, { Component } from 'react';

class Getuser extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const userData = data.results[0];

      this.setState({
        user: {
          title: userData.name.title,
          firstName: userData.name.first,
          image: userData.picture.large,
        },
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <p>Loading user data...</p>;
    }

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>User Info</h2>
        <img src={user.image} alt="User" style={{ borderRadius: '50%' }} />
        <h3>{user.title} {user.firstName}</h3>
      </div>
    );
  }
}

export default Getuser;
