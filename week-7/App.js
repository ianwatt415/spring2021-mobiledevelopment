import logo from './logo.svg';
import './App.css';
import Resistance from './components/Resistance';
import Cardio from './components/Cardio';

function App() {
  return (
    <div>
      <h1>Fitness Tracker</h1>
      <Resistance/>
      <Cardio/>
    </div>
  );
}

export default App;
