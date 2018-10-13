import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Splash from '../../components/Splash/Splash';
import Home from '../../components/Home/Home';
import Dashboard from '../../containers/Dashboard/Dashboard';
import Players from '../../containers/Players/Players';


class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div>
					<h1>futbol</h1>
					<Route exact path='/' component={Splash}/>
					<Route path='/home' component={Home}/>
					<Route exact path='/home/dashboard' component={Dashboard}/>
					<Route exact path='/home/players' component={Players}/>
				</div>
			</BrowserRouter>
		);
  }
}

export default App;
