import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";

const MainLayout = () => {

  const [icon, setIcon] = useState<string>('')
  
  const liftIcon = (iconLink:string) => {
    setIcon(iconLink);
  }

  return (
    <div>
      <Menu icon={icon}/>
      <Outlet context={liftIcon}/>
    </div>
  );
};

export default MainLayout;