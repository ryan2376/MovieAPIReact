import MovieCard from "../components/MovieCard"

function Home() {

    const movies = [
        { id: 1, title: 'MockingBird', release_date: '2010' },
        { id: 2, title: 'Star-Wars', release_date: '1989' },
        { id: 3, title: 'Iron-Man', release_date: '2009' },
    ]

    return <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => 
                (
                    <MovieCard movie={movie} key={movie.id} />
                )
            )}
        </div>
    </div>
}

export default Home