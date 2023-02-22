import './App.css';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import About from './components/About'

function App() {
  return (
    <>
      <Routes>
        <Route path= "/" element= { <Homepage/> } />
        <Route path= "/about" element= { <About/> } />
      </Routes>
      
    </>
  );
}

export default App;
