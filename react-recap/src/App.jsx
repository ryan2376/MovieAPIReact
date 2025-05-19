import './App.css';
import MovieCard from './components/MovieCard';

function App() {

  const movieNumber = 2;

  return (
    <>
      {/* {movieNumber === 1 ? (
        <MovieCard movie={{
          title: "HummingBird",
          release_date: '2025'
        }} />) : (<MovieCard movie={{
          title: "Chronicles of Narnia",release_date:'1998'}} 
          />)
      } */}
      {movieNumber === 1 && <MovieCard movie={{ title: "HummingBird", release_date: '2025' }} />}

    </>
  )
}

export default App
