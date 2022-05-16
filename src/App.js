import './App.css';
import MobileOS from './components/MobileOS'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Intro</h1>
        <MobileOS/>
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
