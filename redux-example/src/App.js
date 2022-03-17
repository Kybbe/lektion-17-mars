import './App.css';
import { increment, decrement } from './actions/counterActions';
import { useDispatch } from 'react-redux';
import ViewCounter from './components/ViewCounter';

function App() {
  const dispatch = useDispatch(); // Initierar useDispatch()

  function handleIncrease() {
    dispatch(increment(1));
  }

  function handleDecrease() {
    dispatch(decrement(1));
  }

  return (
    <div className="App">
      <h2>Räknare</h2>
      <ViewCounter />
      <button onClick={ handleIncrease }>Öka</button>
      <button onClick={ handleDecrease }>Minska</button>
    </div>
  );
}

export default App;
