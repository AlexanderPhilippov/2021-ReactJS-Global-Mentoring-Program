const baseApiUrl = 'http://127.0.0.1:4000/'

export const useCreateUrl = (
    route: string,
    params?: Record<string, string>
): RequestInfo => {
    const requstUrl = new URL(`${baseApiUrl}${route}`)
    Object.keys(params || {}).forEach((key) => {
        const value = params?.[key] as string
        value && requstUrl.searchParams.append(key, value)
    })
    return requstUrl as unknown as RequestInfo
}

export const MoviesRoute = 'movies'
