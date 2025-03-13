import React, {FC, ReactNode} from 'react';
import IUser from "../../model/IUser";


type UserComponentsWithChildren<T> = T & {children?: ReactNode};
const UserComponents:FC<UserComponentsWithChildren<IUser>> = ({id, name, children, username, email}) => {
  return (
    <div>{id} {name}</div>
  );
};

export default UserComponents;