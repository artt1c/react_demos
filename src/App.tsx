import React, {FC, useEffect, useRef, useState} from 'react';
import './App.css';

const App: FC = ()=> {

  const [number, setNumber] = useState<number>(0);

  let y = useRef<number>(0);

  useEffect(() => {
    console.log('work')
  }, [number]);

  return (
    <>
      <button onClick={() => {
        setNumber(prevState => prevState + 1);
      }}>change number</button>

      <button onClick={() => {
        y.current++;
        console.log(y);
      }}>change y</button>
    </>
  );
}

export default App;
