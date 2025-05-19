import './App.css';
import MovieCard from './components/MovieCard';

function App() {

  return (
    <>
      <MovieCard movie = {{
        title: "HummingBird",
        release_date: '2025'
      }} />
      <MovieCard movie = {{
        title: "Chronicles of Narnia",
        release_date: '1998'
      }} />
      <MovieCard movie = {{
        title: "HarryPotter",
        release_date: '2006'
      }} />
    </>
  )
}

export default App
