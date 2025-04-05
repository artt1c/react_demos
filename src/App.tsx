import React, {FC, useCallback, useState} from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import User from "./components/user/User";

const App: FC = ()=> {

  const [id, setId] = useState<number>(1)
  const increment = () => {
    setId(prevState => ++prevState)
  }

  const someFunction = useCallback(() => {
    console.log('asd')
  }, [])

  return (
    <>
      <Menu someFunction={someFunction}/>
      <User id={id}/>
      <button onClick={increment}>Increment Id</button>
    </>
  );
}

export default App;
