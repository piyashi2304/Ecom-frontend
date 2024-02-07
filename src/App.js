
import './App.css';
import RouteCompo from './Route/RouterCompo';
import "../src/style.css"
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouteCompo />
    </div>
  );
}

export default App;
