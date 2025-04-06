import React, {FC} from 'react';
import './App.css';
import SomeComponent from "./components/SomeComponent";

const App: FC = ()=> {
  return (
    <>
      <SomeComponent message={'hello'}/>
    </>
  );
}

export default App;
