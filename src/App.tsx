import React, {FC, useState} from 'react';
import './App.css';

const App: FC = ()=> {

  const [number, setNumber] = useState<number>(0);

  return (
    <>
      <h2>{number}</h2>
      <button onClick={() => {
        setNumber(prevState => prevState + 1);
      }}>change number</button>

    </>
  );
}

export default App;
