import React, {FC, ReactNode} from 'react';
import IUser from "../../model/IUser";

type UserComponentsWithChildren<T> = T & {children?: ReactNode} & {clickHandler: (id:number) => void};

const UserComponents:FC<UserComponentsWithChildren<IUser>> = ({id, name, clickHandler}) => {
  return (
    <div>{id} - {name}
      <button onClick={()=>clickHandler(id)}>chose</button></div>
  );
};

export default UserComponents;