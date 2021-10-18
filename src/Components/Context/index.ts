import { createContext } from 'react'

export interface movieContextModel {
    movieId?: number
    pageYOffset?: number
}
interface MoviesContext {
    context?: movieContextModel
    setContext: (context?: movieContextModel) => void
}

export const Context = createContext<MoviesContext>({ setContext: () => null })
