import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Counter } from './Counter';
import { Resume } from './Resume';
import { Search } from './Search';
import { List } from './List';
import { Create } from './Create';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Resume/>

      <Counter/>

      <Search/>

      <List/>

      <Create/>

    </div>
  )
}

export default App
