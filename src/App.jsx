import React from 'react';
import { useState } from 'react';
import './App.css';
import { Counter } from './Counter';
import { Resume } from './Resume';
import { Search } from './Search';
import { List } from './List';
import { Create } from './Create';
import { Item } from './Item';
import { Modal } from './Modal';
import { Form } from './Form';
import { CostContext, CostProvider } from './CostContext';


function App() {
  
  const {
    openModal,
    setOpenModal,
  } = React.useContext(CostContext);

  //const openModal = React.useContext(CostContext);

  return (

    <CostProvider>

      <div className="App">

        <Search/>

        <Resume/>

        <Counter/>

        <List>
          <Item/>
        </List>

        <Create/>

        {!!openModal && (
          <Modal>
            <Form />
          </Modal>
        )}

      </div>

    </CostProvider>
  )
}

export default App
