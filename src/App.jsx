import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Counter } from './Counter';
import { Resume } from './Resume';
import { Search } from './Search';
import { List } from './List';
import { Create } from './Create';
import { Item } from './Item';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Search/>

      <Resume/>

      <Counter/>

      <List>
        <Item/>
      </List>

      <Create/>

    </div>
  )
}

export default App
