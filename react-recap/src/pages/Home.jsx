import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { id: 1, title: 'MockingBird', release_date: '2010' },
        { id: 2, title: 'Star-Wars', release_date: '1989' },
        { id: 3, title: 'Iron-Man', release_date: '2009' },
    ]

    const handleSearch = (e) => {
        alert(searchQuery)
        e.preventDefault()
        setSearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>

        </form>
        <div className="movies-grid">
            {movies.map((movie) =>
            (<MovieCard movie={movie} key={movie.id} />)
            )}
        </div>
    </div>
}

export default Home