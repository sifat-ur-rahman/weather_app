
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherApp from './WeatherApp';
import WeatherDetails from './WeatherDetails';

function App() {
  return (
    <Router>
      <Routes >
      <Route path="/" element={<WeatherApp />} />
        <Route path="/details" element={<WeatherDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
