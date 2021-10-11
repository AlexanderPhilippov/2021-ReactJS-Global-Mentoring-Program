import { MovieModel } from 'Components/Movie/models'

export enum MovieFormAction {
    ADD = 'Add movie',
    EDIT = 'Edit movie',
    DELETE = 'Delete movie',
}

export interface MovieFormProps {
    action?: MovieFormAction
    movie?: MovieModel
}
