import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import ToogleText from './components/ToggleText';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import Alert from './components/Alert';
import CounterApp from './components/CounterApp';
import LiveInput from './components/LiveInput';

function App() {
  
   return (
    <div className="App">
      <Counter />
      <ToogleText />
      <InputField />
      <Alert />
      <CounterApp />
      <LiveInput />
    </div>
  );
  }
 


export default App;
