interface FieldsRequired {
    title: string
    poster_path: string
    overview: string
    runtime: number
    genres: string[]
}

interface FieldsOptional {
    tagline: string
    vote_average: number
    vote_count: number
    release_date: string
    budget: number
    revenue: number
}

interface MovieBaseModel
    extends Required<FieldsRequired>,
        Partial<FieldsOptional> {}

export interface MovieModel extends MovieBaseModel {
    id: number
}

export interface MovieActions {
    handleEdit: () => void
    handleDelete: () => void
}

export interface MovieProps extends MovieActions {
    movie: MovieModel
}
