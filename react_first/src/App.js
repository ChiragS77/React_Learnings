import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import Student from './components/Student';
import Header from './components/Header';
import Chirag from './components/Chirag';
import styled from 'styled-components';
import ChangeName from './components/ChangeName';
import LightToogle from './components/LightToogle';
import NameForm from './components/NameForm';

const StyledAge = styled.h2`
  color: red;
  font-weight: bold;
`;

function Welcome({name,age}){
  return <h3 style={{color:"blue",backgroundColor:"black",padding:"12px"}}>My name is {name} & my age is {age}</h3>
}

function Age({name,age}){
  return <StyledAge>{name} is {age} year old</StyledAge>
  
}

function App() {
  const name = "CHirag Deshmukh";
  const isLoggedIn = true;
  const items = ["apple","banana","orange"];
 
  return (
   <div>
      {isLoggedIn ? <h2>Welcome {name}</h2>: <h2>Login in first</h2>}
      <ul>
        {items.map((item,index)=>(
          <li key={index} >{item}</li>
        ))}
      </ul>
      <Student />
      <Header />
      <NameForm />
      <br />
      <Chirag />
      <Welcome  name="chirag Deshmukh" age="54" />
      <Age name = "Saloni Dubey" age= {20} />
      <ChangeName />
      <LightToogle />
   </div>
  );
}

export default App;
