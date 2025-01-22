import MovieCard from '../components/MovieCard'
import { useState } from 'react';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: 'Vamps', description: 'thrill'},
        {id: 2, title: 'Maga', description: 'trump'},
        {id: 3, title: 'Moses', description: 'bible'},
        {id: 4, title: 'Cat', description: 'lion'}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    };

    return(
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text" 
                placeholder="Search movies..." 
                className='search-input'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}  // update the searchQuery state when input changes
            />
                <button type="submit" className='search-button'>Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie =>
                    (
                    <MovieCard movie={movie} key={movie.id} />
                    )
                )}
            </div>
        </div>
    )
}

export default Home