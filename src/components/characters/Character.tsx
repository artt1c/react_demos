import React, {FC} from 'react';
import styles from './Character.module.css';

interface IProps {
  name: string;
  img: string;
  // children?: React.ReactNode;
}


type PropsWithChildren<T> = T & {children?: React.ReactNode};

const Character:FC<PropsWithChildren<IProps>> = ({name, img, children}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img className={styles.w200} src={img} alt={name}/>
      <p>{children}</p>
    </div>
  );
};

export default Character;