import React, { useContext, useState } from 'react'
import './App.css'
import { useStateValue } from './StateProvider';
function App() {
  const [{counter},dispatch]=useStateValue();
  return (
    <div className="ui container">
      <h1>counting value {counter}</h1>
      <button onClick={() => dispatch({type: 'increase'})}>increase</button>
      <button onClick={() => dispatch({type: 'decrease'})}>decrease</button>

    </div>
  )
}

export default App