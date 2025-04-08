import React from 'react';
import User from "../user/User";
import {useStore} from "../../context/store";

const Users = () => {

  const {userStore: {allUsers}} = useStore();

  return (
    <div>
      {
        allUsers.map((user) => (<User key={user.id} user={user} />))
      }
    </div>
  );
};

export default Users;