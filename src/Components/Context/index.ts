import { MovieModel } from 'Components/Movie/models'
import React, { createContext } from 'react'


interface MoviesContext {
    context: Partial<MovieModel>
    setContext: React.Dispatch<React.SetStateAction<Partial<MovieModel>>>
}

export const Context = createContext<MoviesContext>({context: {}, setContext: () => null })
