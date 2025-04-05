import React, {FC, useEffect, useRef, useState} from 'react';
import './App.css';

const App: FC = ()=> {

  const [number, setNumber] = useState<number>(0);


  useEffect(() => {
    console.log('work')
  }, [number]);

  return (
    <>
      <button onClick={() => {
        setNumber(prevState => prevState + 1);
      }}>change number</button>

    </>
  );
}

export default App;
