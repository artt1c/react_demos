import React, {FC} from 'react';
import './App.css';
import Character from "./components/characters/Character";

const App: FC = ()=> {

  return (
    <>
      <Character />
      <Character />
      <Character />
    </>
  );
}

export default App;
