import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {useContextProvider} from "../../context/ContextsProvider";

interface IProps {
  user: IUser;
}

const User:FC<IProps> = ({user}) => {

  const {userStorage:{setFavoriteUser}} = useContextProvider();

  return (
    <div>
      {user.id} {user.username}
      <button onClick={() => {
        setFavoriteUser(user)
      }}>set as favorite</button>
    </div>
  );
};

export default User;