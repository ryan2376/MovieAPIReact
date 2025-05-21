import './css/App.css';
import Favorites from './pages/Favorites';
import Home from "./pages/Home";
import NavBar from "./components/Navbar";

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App