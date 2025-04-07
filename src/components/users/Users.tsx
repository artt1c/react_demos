import React from 'react';
import {useContextProvider} from "../../context/ContextsProvider";
import User from "../user/User";

const Users = () => {

  const {userStorage: {allUsers}} = useContextProvider();

  console.log(allUsers);

  return (
    <div>
      {
        allUsers.map((user) => (<User key={user.id} user={user} />))
      }
    </div>
  );
};

export default Users;