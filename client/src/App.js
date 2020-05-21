import React, { useState } from 'react';
import './App.css';
import {Router} from '@reach/router';
import HomePage from './views/HomePage';
import AddPage from './views/AddPage';
import EditPage from './views/EditPage';

function App() {

const[player, setPlayer] = useState([]);
const[name, setName] = useState('');
const[position, setPosition] = useState('');
const[id, setId] = useState('')


  return (
    <div className="app">
      <div className="title-bar">
        <div className="title-bar-text" style={{margin:'10px 10px 10px 20px', fontSize:'15px'}}>Player Manager Application</div>
      </div>
      <div style={{justifyContent: "center", marginLeft:'40%'}}>
        <button style={{margin: '5px', fontSize: '13px', fontWeight: 'bold'}}>Manage Players</button>
        <button style={{margin: '5px', fontSize: '13px', fontWeight: 'bold'}}>Manage Player Status</button>
      </div> 
      <div>
        <Router>
          <HomePage path='/' player={player} setPlayer={setPlayer} id={id} setId={setId} />
          <AddPage path='/add' name={name} setName={setName} position={position} setPosition={setPosition} player={player} setPlayer={setPlayer} />
          <EditPage path='/manage/:_id' name={name} setName={setName} position={position} setPosition={setPosition} id={id} setId={setId } player={player} setPlayer={setPlayer} />
        </Router>
      </div>
    </div>
  );
}

export default App;
