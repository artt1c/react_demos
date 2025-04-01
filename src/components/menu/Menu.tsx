import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './menu.module.css'

type MenuProps = {
  icon?:string
}

const Menu:FC<MenuProps> = ({icon}) => {
  return (
    <div>
      <ul className={styles.menu}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
          <Link to={'/auth/resources'}>Auth Resources</Link>
        </li>
        {icon && <li><img src={icon} alt="icon"/></li>}
      </ul>
      <hr/>
    </div>
  );
};

export default Menu;