import React, {FC, useEffect, useState} from 'react';

type UserProps = {
  id: number;
  name?: string;
}

const User:FC<UserProps> = ({id}) => {

  console.log('user component render id: ' + id);

  const [user, setUser] = useState<UserProps | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then((res) => res.json())
      .then(value => setUser(value))
  }, [id]);

  return (
    <div>
      {user && <h2>{user.name}</h2>}
    </div>
  );
};

export default User;