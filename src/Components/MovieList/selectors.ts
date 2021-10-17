import { createSelector } from 'reselect'
import { AppState } from 'src/Store/rootReducer'
import { SortOrder } from './models'

const moviesState = (state: AppState) => state.movies
const filterState = (state: AppState) => state.filter

export const getTotalAmountSelector = createSelector(
    moviesState,
    (movies) => movies?.totalAmount || 0
)

export const getMoviesSelector = createSelector(
    moviesState,
    (movies) => movies?.data || []
)

export const getErrorSelector = createSelector(
    moviesState,
    (movies) => movies?.error
)

export const getGenreSelector = createSelector(
    filterState,
    (filter) => filter.genre || ''
)

export const getSotrtBySelector = createSelector(
    filterState,
    (filter) => filter.sortBy || 'genres'
)

export const getSortOrderSelector = createSelector(
    filterState,
    (filter) => filter.sortOrder || SortOrder.DESC
)
