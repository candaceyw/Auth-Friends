import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddFriend from './AddFriend';
import AddBtn from '../../layout/AddBtn';

const FriendsList = props => {
  const [updated, setUpdate] = useState(false);
  const [friend, setFriend] = useState({});
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res =>
        // console.log(res.data)
        setFriends(res.data)
      )
      .catch(err => console.log(err.response));
  }, [updated]);

  return (
    <ul className='collection with-header' style={friendStyle}>
      <li className='collection-header'>
        <h1 className='center'>Friends</h1>
      </li>
      {friends.map(friend => (
        <li className='collection-item'>
          <div key={friend.id}>
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
            <a href='#!' className='secondary-content'>
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
  margin: 'auto'
};

export default FriendsList;

{
  /* <li className='collection-item'>
  <div key={friend.id}>
    <br />
    <span className='grey-text'>
      <span className='black-text'>{friend.name}</span>
      <span className='black-text'>{friend.age}</span>
      <span className='black-text'>{friend.email}</span>
    </span>
    <a href='#!' onClick={onDelete} className='secondary-content'>
      <i className='material-icons grey-text'>delete</i>
    </a>
  </div>
</li>; */
}

//    <ul className='collection with-header'>
//       <li className='collection-header'>
//         <h4 className='center'>Friends</h4>
//       </li>
//       {friends.map(friend => (
//         <div key={friend.id}>
//           <h1>{friend.name}</h1>
//           <p>{friend.age}</p>
//           <p>{friend.email}</p>
//         </div>
//       ))}
//     </ul>

//  <div>
//       <h1>Friends</h1>
//       <div className='friends'>
//         {friends.map(friend => (
//           <div key={friend.id}>
//             <h1>{friend.name}</h1>
//             <p>{friend.age}</p>
//             <p>{friend.email}</p>
//           </div>
//         ))}
//       </div>{' '}
//     </div>
