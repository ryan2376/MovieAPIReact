import './css/App.css';
import Favorites from './pages/Favorites';
import Home from "./pages/Home";
import NavBar from "./components/Navbar";

import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './helpers/MovieContext';


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App