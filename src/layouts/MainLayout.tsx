import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/pagination/PaginationComponent";
import CharactersComponent from "../components/characters/CharactersComponent";
import {useSearchParams} from "react-router-dom";
import {ICharacter} from "../models/ICharacter";
import {charecterService} from "../services/api.service";

const MainLayout = () => {
  // todo disables paginations
  const [query] = useSearchParams({page: '1'});

  const [charactersState, setCharactersState] = useState<ICharacter[]>([])
  const [flags, setFlags] = useState({prev: true, next:true})

  useEffect(() => {
    const currentPage = query.get('page') || '1';

    charecterService.getAll(currentPage).then(value => {
      setCharactersState(value.data.results);
      setFlags({
        prev: !value.data.info.prev,
        next: !value.data.info.next
      })
    })
  }, [query]);

  return (
    <div>
      <CharactersComponent characters={charactersState} />
      <PaginationComponent prev={flags.prev} next={flags.next}/>
    </div>
  );
};

export default MainLayout;