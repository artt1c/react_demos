import React, {FC, useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Menu from "./components/menu/Menu";
import {userService} from "./services/api.service";
import {useStore} from "./context/store";


const App: FC = ()=> {

  const {userStore} = useStore();

  useEffect(() => {
    userService.getUsers().then(value => userStore.loadingUsers(value.data))
  }, []);

  return (
    <>
        <Menu/>
        <Outlet/>
        <hr/>
        {userStore.favoriteUser && <div>{userStore.favoriteUser.email}</div>}
        <hr/>
    </>
  );
}

export default App;
