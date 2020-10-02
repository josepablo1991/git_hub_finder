// import React , {Fragment,Component} from 'react';
import React  from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './componets/layout/Navbar';
// import UserItem from './componets/users/UserItem'
import Alert from './componets/layout/Alert';
import About from './componets/pages/about';
import User from './componets/users/User';
import Home from './componets/pages/home';
import NotFound from './componets/pages/notFound';
// import axios from 'axios';


import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';


import './App.css';

const App = () => {

    return (
      <GithubState>
        <AlertState>
        <Router>
          <div className = 'App'>
              <Navbar/>
            <div className='container'>
              <Alert/>
              <Switch>
                <Route exact path='/' component = {Home}/>
                <Route exact path='/about' component = {About}/>
                <Route exact path='/user/:login' component={User}/>
                // NotFound must be at the end of all routes 
                <Route component={NotFound}/>
                )}/>
              </Switch>
            </div>
          </div>
        </Router>
        </AlertState>
      </GithubState>
    );
}


export default  App;
