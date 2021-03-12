import logo from './logo.svg';
import './App.css';
import Resistance from './components/Resistance';
import Cardio from './components/Cardio';
import Water from './components/Water';
import Sleep from './components/Sleep';

function App() {
  return (
    <div>
      <h1>Fitness Tracker</h1>
      <Resistance/>
      <Cardio/>
      <Sleep/>
      <Water/>
    </div>
  );
}

export default App;
