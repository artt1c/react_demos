import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponents from "./components/user/UserComponents";

const App: FC = ()=> {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(value => {
        setUsers(value);
      });

    return () => {
      console.log('Users Fetching...');
    }
  }, []);

  const [userId, setUserId] = useState<number>(0);

  const clickHandler = (id:number) => {
    setUserId(id);
    console.log(userId);
  }

  return (
    <>
      {
        users.map(({id, name, username, email}, i) =>
          <UserComponents
            key={i}
            id={id}
            name={name}
            username={username}
            email={email}

            clickHandler = {clickHandler}
          />)
      }
      <h2>{userId}</h2>
    </>
  );
}

export default App;
