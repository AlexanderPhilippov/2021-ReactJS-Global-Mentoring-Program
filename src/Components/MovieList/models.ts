import { MovieModel } from 'Components/Movie/models'

export interface MoviesResponseModel {
    data: MovieModel[]
    totalAmount: number
    offset: number
    limit: number
}
