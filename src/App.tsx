import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Menu from "./components/menu/Menu";
import {Context} from "./context/ContextsProvider";
import {postService, userService} from "./services/api.service";
import {IUser} from "./models/IUser";
import {IPost} from "./models/IPost";

const App: FC = ()=> {

  const [users, setUsers] = useState<IUser[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    userService.getUsers().then(value => setUsers(value.data));
    postService.getPosts().then(value => setPosts(value.data));
  }, []);

  return (
    <>
      <Context.Provider value={{
        userStorage: {
          allUsers: users
        },
        postStore: {
          allPosts: posts
        }
      }}>

        <Menu/>
        <Outlet/>

      </Context.Provider>
    </>
  );
}

export default App;
