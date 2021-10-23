import { FormikErrors } from 'formik'
import { FormikMovieModel } from './models'

export default (values: FormikMovieModel): FormikErrors<FormikMovieModel> => {
    const requireErrorMessage = 'Required'
    const invalidNumberMinMax = 'Invalid number: min 0 max 10'
    const invalidTime = 'Invalid time'
    const invalidDate = 'Invalid date'

    const errors: FormikErrors<FormikMovieModel> = {}
    if (!/^(.){5,100}$/.test(values?.title || '')) {
        errors.title = requireErrorMessage
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(values?.release_date || '')) {
        errors.release_date = invalidDate
    }
    if (!/^http(s?):\/\/.*$/.test(values?.poster_path || '')) {
        errors.poster_path = requireErrorMessage
    }
    if (!/^[0-9]{1,1}([.][0-9]{1,1})?$|^10$/.test(values?.vote_average)) {
        errors.vote_average = invalidNumberMinMax
    }
    if (!/^\d{1,3}$/.test(values?.runtime)) {
        errors.runtime = invalidTime
    }
    if (!/^\w{1,}([,]\w{1,})+?$|^\w{1,}$/.test(values?.genres)) {
        errors.genres = requireErrorMessage
    }
    if (!/^(.){5,}$/.test(values?.overview || '')) {
        errors.overview = requireErrorMessage
    }
    return errors
}
