import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherDetails from './components/Weather/WeatherDetails';

function App() {

  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weatherDetails/:lat/:lon' element={<WeatherDetails />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
