import React, {FC} from 'react';

interface IProps {
  name: string;
  img: string;
}

const Character:FC<IProps> = ({name, img}) => {
  return (
    <div>
      <h2>{name}</h2>

      <img src={img} alt={name}/>
    </div>
  );
};

export default Character;