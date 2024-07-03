import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Homepage</h1>
      <p>
        This is the homepage of our website. Here you can find information about our services and navigate to different sections. Please log in or register to access more features.
      </p>
      <div className="button-group">
        <Link to="/login">
          <button className="button login-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="button register-button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
