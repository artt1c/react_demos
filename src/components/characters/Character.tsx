import React, {FC} from 'react';

interface IProps {
  name: string;
  img: string;

}


type PropsWithChildren<T> = T & {children?: React.ReactNode};

const Character:FC<PropsWithChildren<IProps>> = ({name, img, children}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name}/>
      <p>{children}</p>
    </div>
  );
};

export default Character;