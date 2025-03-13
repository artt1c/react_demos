import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponents from "./components/user/UserComponents";
import {getUsers} from "./servises/user.api.service";
import PostsComponent from "./components/posts/PostsComponent";
import {IPost} from "./model/IPost";
import {getPostsOfUser} from "./servises/post.api.service";

const App: FC = ()=> {

  const [users, setUsers] = useState<IUser[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    getUsers()
      .then(users => {
        setUsers(users.data);
      });
    return () => {
      console.log('Users Fetching...');
    }
  }, []);

  useEffect(() => {
    if (userId !== 0) getPostsOfUser(userId).then(posts => setPosts(posts.data));
  }, [userId]);

  const clickHandler = (id:number) => {
    setUserId(id);

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
      <div>
        <PostsComponent posts={posts}/>
      </div>
    </>
  );
}

export default App;
