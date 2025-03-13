import React, {FC} from 'react';
import './App.css';
import Character from "./components/characters/Character";

const App: FC = ()=> {

  return (
    <>
      <Character
        name={'bart'}
        img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}

      >
        <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eligendi ex laborum, odio quod rem vitae voluptas! Deserunt dolorem doloribus ex fugiat praesentium quod rem vitae. Consequatur cumque distinctio error ipsam necessitatibus officia pariatur placeat sapiente sed totam. Assumenda cupiditate dicta ipsa ipsum magnam molestiae, necessitatibus nulla repudiandae vel voluptatibus.</i>
      </Character>

      <Character
        name={'homer'}
        img={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
      >
        <u>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error incidunt iste. Corporis deleniti illum incidunt inventore, iure pariatur rem voluptates! Architecto aspernatur commodi cupiditate doloribus dolorum et expedita iste laudantium nam nulla perspiciatis, quae, quibusdam recusandae repellendus sequi temporibus totam voluptatum! Amet asperiores consectetur cupiditate deleniti ex, repellat sapiente!</u>
      </Character>

      <Character
        name={'marge'}
        img={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
    </>
  );
}

export default App;
