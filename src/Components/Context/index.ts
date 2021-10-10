import { MovieModel } from 'Components/Movie/models'
import { createContext } from 'react'

interface MoviesContext {
    context?: MovieModel
    setContext: (movie?: MovieModel) => void
}

export const Context = createContext<MoviesContext>({ setContext: () => null })
