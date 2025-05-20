import MovieCard from "../components/MovieCard"

function Home() {

    const movies = [
        { id: 1, title: 'Lion King', release_date: '1997' },
        { id: 2, title: 'Moana', release_date: '2013' },
        { id: 3, title: 'The Avengers', release_date: '2010' }
    ]
    
    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>

}

export default Home