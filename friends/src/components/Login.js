import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

const Login = props => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const updateUser = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friends');
      })
      .catch(err => console.log(err.response));
    console.log('err');
    setLoggedIn(true);
  };

  if (localStorage.getItem('token')) {
    return <Redirect to='protected' />;
  }
  return (
    <div className='row' style={friendStyle}>
      <form className='col s12' onSubmit={login}>
        <input
          name='username'
          type='text'
          placeholder='username'
          onChange={updateUser}
        ></input>
        <input
          name='password'
          type='password'
          placeholder='password'
          onChange={updateUser}
        ></input>

        <button className='waves-effect waves-light btn-large'>Log in</button>
      </form>
    </div>
  );
};

const friendStyle = {
  width: '50%',
  margin: 'auto'
};

export default Login;
