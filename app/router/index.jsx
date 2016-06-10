import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
// App components
import App from 'App';
import GameBoard from 'GameBoard';
import Profile from 'Profile';
import About from 'About';
import Help from 'Help';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GameBoard}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/profile/:userId" component={Profile}/>
      <Route path="/help" component={Help}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
);