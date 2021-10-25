import React from 'react'
import classNames from 'classnames'
import { useFormikContext, Field } from 'formik'
import { FormBlockProps, FormikMovieModel } from './models'

const FormBlock: React.FC<FormBlockProps> = (props) => {
    const hasError = props.touched && props.errorText
    return (
        <div className={props.containerClassName}>
            <label>
                {props.label} {hasError && `- ${props.errorText}`}
            </label>
            <Field
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                className={classNames({
                    hasError,
                })}
                component={props.component}
            />
        </div>
    )
}
const AddEditMovieFormBody: React.FC = () => {
    const leftColumnStyles = 'movie-form__left-column'
    const rightColumnStyles = 'movie-form__right-column'
    const descriptionStyles = 'movie-form__description'

    const { touched, errors, isSubmitting } =
        useFormikContext<FormikMovieModel>()

    return (
        <>
            <FormBlock
                touched={touched.title}
                errorText={errors.title}
                containerClassName={leftColumnStyles}
                name="title"
                label="title"
                placeholder="Movie title"
            />
            <FormBlock
                touched={touched.release_date}
                errorText={errors.release_date}
                containerClassName={rightColumnStyles}
                name="release_date"
                label="release date"
                type="date"
            />
            <FormBlock
                touched={touched.poster_path}
                errorText={errors.poster_path}
                containerClassName={leftColumnStyles}
                name="poster_path"
                label="movie url"
                placeholder="https://"
            />
            <FormBlock
                touched={touched.vote_average}
                errorText={errors.vote_average}
                containerClassName={rightColumnStyles}
                name="vote_average"
                label="rating"
            />
            <FormBlock
                touched={touched.genres}
                errorText={errors.genres}
                containerClassName={leftColumnStyles}
                name="genres"
                label="genres"
                placeholder="Select genre"
            />
            <FormBlock
                touched={touched.runtime}
                errorText={errors.runtime}
                containerClassName={rightColumnStyles}
                name="runtime"
                label="runtime"
                placeholder="minutes"
            />
            <FormBlock
                touched={touched.overview}
                errorText={errors.overview}
                containerClassName={descriptionStyles}
                name="overview"
                label="overview"
                placeholder="Movie description"
                component="textarea"
            />
            <div className="movie-form__buttons">
                <input type="submit" value="submit" disabled={isSubmitting} />
                <input type="reset" value="reset" disabled={isSubmitting} />
            </div>
        </>
    )
}

export default AddEditMovieFormBody
