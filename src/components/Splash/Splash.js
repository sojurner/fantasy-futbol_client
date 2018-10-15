import React from 'react';
import { Link } from 'react-router-dom';

import './Splash.css';

const Splash = () => {
  return (
    <Link to="/home" class="home-button">
      Get Started
    </Link>
  );
};

export default Splash;
