import React, { useState ,useEffect} from 'react'
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState();
  // const getUsers = async () => {
  //   try {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  //     setUsers(res.data);
  //     console.log(res.data);
  //   } 
  //   catch (error) {
  //     console.log(error);
  //   }
  
  // }
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data))
    .catch(err => console.log(err));
  }, []);


  return (
    <div className="users">
      <h2>Users</h2>
      {/* <button onClick={getUsers}>Users</button> */}
      <div className="users-cards">
        {users?.map((user) => (
          <div className="useritem">
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
            {user.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
