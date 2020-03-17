import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import { getToken } from './utils/axiosWithAuth';
import ProtectedRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/friends/FriendsList';
import PrivateRoute from './components/PrivateRoute';
// import Navbar from './layout/Navbar';
import AddFriend from './components/friends/AddFriend';
import AddBtn from './layout/AddBtn';

function App() {
  const signedIn = getToken();

  return (
    <Router>
      <nav style={{ marginBottom: '30px' }} className='deep-orange darken-3'>
        <div className='nav-wrapper'>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/protected'>Friends</Link>
            </li>
            <li>
              <Link to='/addfriend'>Add Friend</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/protected'>Friends list</Link>
        </li>
        <li>
          <Link to='/addfriend'>Add Friend</Link>
        </li>
      </ul>
      <div className='container'></div>

      <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendsList} />
        <PrivateRoute exact path='/addfriend' component={AddFriend} />
      </Switch>
    </Router>
  );
}

export default App;
