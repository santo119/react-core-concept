
import { useEffect, useState } from 'react';
import './Friends.css'
import Fend from './Fend';

const Friends = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (

        
        <div className='box'>
            
           
            {
                friends.map(friend => <Fend  friend ={friend} ></Fend>)
            }
          

        </div>
    );
};

export default Friends;

/**
 * 1. state to hold data
 * 2. set useEffect with callback and dependencies[]
 * 3. use fetch to load Data
 * 4. set loaded data to the state
 * 5. display data
 */