import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About'
import Menu from './components/Menu';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path= "/" element= { <Homepage/> } />
        <Route path= "/about" element= { <About/> } />
        <Route path= "/menu" element= { <Menu/> } />
        <Route path="/reservations" element= { <BookingPage/> } />
      </Routes>
      
    </>
  );
}

export default App;
