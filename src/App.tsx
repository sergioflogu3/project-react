import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Label } from './components/label';

const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const add = (n: number): void => {      
    setCount(count + n);
    console.log(count);
  }
  //33:31
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={()=> add(2)}>Sumar</button>
        <Label label="Hola este es mi componente" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
