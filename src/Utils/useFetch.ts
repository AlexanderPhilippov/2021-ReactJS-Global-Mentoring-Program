import MoviesMockData from './movies.json'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function useFetch<T>(url: string): T {
    return MoviesMockData as unknown as T
}

export default useFetch
