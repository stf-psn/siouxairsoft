import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Import Components */
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
