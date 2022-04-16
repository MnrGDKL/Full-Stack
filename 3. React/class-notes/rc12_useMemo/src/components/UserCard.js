import React from "react";

const UserCard = ({user}) => {
  console.log("UserCard");
  return (
    <div className="useritem">
      <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} 
      alt=""/>
      {user.name}
    </div>
  );
};

export default UserCard;
