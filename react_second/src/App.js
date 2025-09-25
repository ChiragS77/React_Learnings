import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import ToogleText from './components/ToggleText';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

function App() {
  
   return (
    <div className="App">
      <Counter />
      <ToogleText />
      <InputField />
    </div>
  );
  }
 


export default App;
