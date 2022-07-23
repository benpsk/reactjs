import { useState } from 'react';
import { v4 as id } from 'uuid';
import NewGrudge from './NewGrudge';
import Grudges from './Grudges';
import initialState from './initialState';
import './style.css';


function Application() {

  const [grudges, setGrudges] = useState(initialState);

  const addGrudge = (grudge) => {
    grudge.id = id();
    grudge.forgiven = false;
    setGrudges([grudge, ...grudges]);
  }

  const toggleForgiveness = (id) => {
    setGrudges(
      grudges.map(grudge => {
        if (grudge.id !== id) return grudge;
        return {...grudge, forgiven: !grudge.forgiven};
      })
    )
  }

  return (
    <div className="app">
      <NewGrudge onSubmit={addGrudge}></NewGrudge>      
      <Grudges grudges={grudges} onForgive={toggleForgiveness}></Grudges>
    </div>
  );
}

export default Application;
