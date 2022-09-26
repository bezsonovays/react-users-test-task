//components
import Sidebar from './components/UI/Sidebar/Sidebar';
import NavRouter from './components/UI/NavRouter/NavRouter';
//css
import './App.css';


function App() {
  return (
    <div className="App">
      <main className="App-wrapper">
          <Sidebar/>
          <NavRouter/>
      </main>
    </div>
  );
}

export default App;
