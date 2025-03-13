import React, {FC} from 'react';
import './App.css';
import Character from "./components/characters/Character";

const App: FC = ()=> {

  return (
    <>
      <Character name={'bart'} img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
      <Character name={'homer'} img={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
    </>
  );
}

export default App;
