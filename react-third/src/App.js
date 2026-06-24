import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Counter from './components/Counter';
import ChangeName from './components/ChangeName';

function App() {
  return (
    <div className="App">
       <h1>My Application</h1>
       <Profile name="Saloni Dubey raj" address="Digras, Yavatmal" />
       <Profile name="srushty " address="chincholi" />       
       <Skills game="football" hobby="cricket" />
       <Education marks={95} />

      <Counter />

      <ChangeName />
    </div>
  );
}

export default App;
