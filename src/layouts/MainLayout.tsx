import React from 'react';
import PaginationComponent from "../components/pagination/PaginationComponent";
import CharactersComponent from "../components/characters/CharactersComponent";

const MainLayout = () => {


  return (
    <div>
      <CharactersComponent/>
      <PaginationComponent/>
    </div>
  );
};

export default MainLayout;