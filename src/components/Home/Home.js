import React from 'react';
import {NavLink} from 'react-router-dom';

const Home = () => {
	return (
		<nav>
			<NavLink to='/home/dashboard'>Dashboard</NavLink>
			<NavLink to='/home/players'>Players</NavLink>
		</nav>
	);
};

export default Home;