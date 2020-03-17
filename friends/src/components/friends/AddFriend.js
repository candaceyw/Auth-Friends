import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
// import M from 'materialize-css/dist/js/materialize.min.js';

const AddFriend = props => {
  const [friend, setFriend] = useState({
    id: Date.now() * Math.random(),
    name: '',
    age: '',
    email: ''
  });

  const handleChange = event => {
    setFriend({
      ...friend,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axiosWithAuth()
      .post('/friends', friend)
      .then(res => { 
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    setFriend({ id: '', name: '', age: '', email: '' });
  };
  return (
    <form onSubmit={handleSubmit} style={friendStyle}>
      <input
        name='name'
        type='text'
        value={friend.name}
        onChange={handleChange}
        placeholder='Name'
      />
      <input
        name='age'
        type='number'
        value={friend.age}
        onChange={handleChange}
        placeholder='Age'
      />
      <input
        name='email'
        type='text'
        value={friend.email}
        onChange={handleChange}
        placeholder='Email'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};


const friendStyle = {
  width: '75%',
  margin: 'auto'
};

export default AddFriend;
