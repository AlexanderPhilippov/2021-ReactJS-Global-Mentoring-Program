import { createContext } from 'react'

interface MoviesContext {
    context?: number
    setContext: (movieId?: number) => void
}

export const Context = createContext<MoviesContext>({ setContext: () => null })
