import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth'

const FriendsList = (props) => {
    const [updated, setUpdate] = useState(false)
    const [friend, setFriend] = useState({})
    const [friends, setFriends] = useState([])

    
    useEffect(() => {
        axiosWithAuth()
          .get('/friends')
          .then(res => 
            // console.log(res.data)
            setFriends(res.data)
            )
          .catch(err => console.log(err.response));
        },[updated])


    return (
        <div>
            <h1>Friends List will be here</h1>
            <div className="friends">
            {friends.map(friend => (
                <div key={friend.id}>
                <h1>{friend.name}</h1>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                </div>
            )
                
                )}
        </div>        </div>

    )
}

export default FriendsList
