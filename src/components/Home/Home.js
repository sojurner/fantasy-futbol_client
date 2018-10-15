import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <nav className="navigation">
      <NavLink to="/home/dashboard" className="dashboard-tab nav-bar">
        Dashboard
      </NavLink>
      <NavLink to="/home/players" className="players-tab nav-bar">
        Players
      </NavLink>
    </nav>
  );
};

export default Home;
