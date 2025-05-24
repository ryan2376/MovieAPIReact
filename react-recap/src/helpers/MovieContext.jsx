import {createContext, useState, useEffect} from "react"

export const MovieContext = createContext()


export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
    const storedFavs = localStorage.getItem("favorites")

    try {
        if (storedFavs) {
            const parsed = JSON.parse(storedFavs)
            if (Array.isArray(parsed)) {
                setFavorites(parsed)
            } else {
                console.warn("Stored favorites is not an array, resetting.")
                localStorage.removeItem("favorites")
            }
        }
    } catch (e) {
        console.error("Error parsing favorites from localStorage:", e)
        localStorage.removeItem("favorites") // Clear bad data
    }
}, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}