import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Booking from './Page/Booking';
import Home from './Page/Home';
import { TableProvider } from './context/Table';

function App() {
  return (
    <div className="App">
      <TableProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route exact path='/booking' element={<Booking/>} />
          </Routes>
        </BrowserRouter>
      </TableProvider>
    </div>
  );
}

export default App;
