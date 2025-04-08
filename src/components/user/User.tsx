import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {useStore} from "../../context/store";

interface IProps {
  user: IUser;
}

const User:FC<IProps> = ({user}) => {

 const {userStore: {setFavoriteUser}} = useStore();

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