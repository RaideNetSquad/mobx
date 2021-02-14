import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ToDO from './ToDo';

function App() {
  return (
    <div className="App">
      <h1>Hello, MobX!</h1>
      <Counter/>
      <ToDO/>
    </div>
  );
}

export default App;
