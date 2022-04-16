import axios from 'axios'
import React from 'react'
import { useEffect, useState, useMemo, useCallback } from 'react';
import Users from './components/Users';

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([])
  const [text, setText] = useState('')
  // const inputRef = React.useRef(null);
  const [search, setSearch] = useState('')
  console.log("text", text, "search", search);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  }, [])

  const handleSearch = () => {
    setSearch(text)
    // setSearch(inputRef.current.value)
  }

  //! useMemo is used for memorization of variables
  const filteredUsers = useMemo(() => 
    
    users.filter(user => {
    return user.name.toLowerCase()
                    .includes(search.toLowerCase());
  }), [users,search])

  //! useCallback is used for memorization of functions
  const addUser = useCallback(() => {
    setUsers([...users, {
      id: users.length + 1,
      name: `User ${users.length + 1}`
    }])
  }, [users]);

  
  return (
    <div>
      <input type="search" onChange={(e)=>setText(e.target.value)}/>
      {/* <input type="search" ref={inputRef}/> */}
      <button onClick={handleSearch}>Search User</button>
      <Users users={filteredUsers} addUser={addUser} />
    </div>
  )
}

export default UseMemoCallBack