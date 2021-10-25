import { MovieModel } from 'Components/Movie/models'

export enum MovieFormAction {
    ADD = 'Add movie',
    EDIT = 'Edit movie',
    DELETE = 'Delete movie',
}

export interface FormikMovieModel
    extends Omit<Partial<MovieModel>, 'genres' | 'runtime' | 'vote_average'> {
    runtime: string
    genres: string
    vote_average: string
}

export interface FormBlockProps {
    touched?: boolean
    errorText?: string
    containerClassName: string
    name: string
    type?: string
    label: string
    placeholder?: string
    component?: string
}
