import React, {memo} from "react";
import UserCard from "./UserCard";

const Users = ({users, addUser}) => {
  console.log("Users");
  return (
    <div className="users">
      <button id="add-button" onClick={()=> addUser()}>Add User</button>
      {users?.map(user => {
      return <UserCard key={user.id} user={user}/>
      })}
    </div>
  );
};

export default memo(Users);
