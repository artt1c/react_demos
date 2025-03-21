import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <span><NavLink to={'about'}>About</NavLink></span>
      <span><NavLink to={'contacts'}>Contacts</NavLink></span>
      <span><NavLink to={'asdb'}>asdb</NavLink></span>
      <hr/>
    </div>
  );
};

export default HeaderComponent;