import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


const FriendsList = () => {
  const [friends, setFriends] = useState([]);


  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res =>
        setFriends(res.data)
      )
      .catch(err => console.log(err.response));
  }, []);


  const deleteFriend = (friend) => {
    console.log(friend.id)
    axiosWithAuth()
    .delete(`/friends/${friend.id}`)
    .then(res => {
      setFriends([
        ...res.data
      ]) 
      console.log('delete: ', res.data);
    })
    .catch(err => {
      console.log('err: ', err);
    })
    setFriends(friends.filter( friend => friend.id!==friend.id))

  }

  return (
    <ul className='collection with-header' style={friendStyle}>
      <li className='collection-header'>
        <h1 className='center'>Friends</h1>
      </li>
      {friends.map(friend => (
        <li className='collection-item'key={friend.id}>
          <div >
            <br />
            <span className='grey-text'>
              <span className='black-text'>
                <h3>{friend.name}</h3>
              </span>
              <br />
              <span className='black-text'>Age: {friend.age}</span>
              <br />
              <span className='black-text'>Email: {friend.email}</span>
            </span>
            <a href='#!' onClick={deleteFriend} className='secondary-content'>
              <i className='material-icons grey-text'>delete</i>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

const friendStyle = {
  width: '75%',
  margin: 'auto',
  marginBottom: '30px'
};

export default FriendsList;
