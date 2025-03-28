import React, {FC} from 'react';
import {ICharacter} from "../../models/ICharacter";

type ICharacterProps = {
  characters: ICharacter[];
}

const CharactersComponent:FC<ICharacterProps> = ({characters}) => {
  return (
    <div>
      {
        characters.map(character => (<div key={character.id}>{character.name}</div>))
      }
    </div>
  );
};

export default CharactersComponent;