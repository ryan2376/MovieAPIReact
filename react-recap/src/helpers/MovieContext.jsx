import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = () => {
    
}