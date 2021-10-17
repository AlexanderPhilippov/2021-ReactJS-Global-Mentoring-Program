async function useFetch<T>(
    url: string,
    params?: Record<string, string>
): Promise<T> {
    const baseApiUrl = 'http://127.0.0.1:4000/'
    const requstUrl = new URL(`${baseApiUrl}${url}`)
    Object.keys(params || {}).forEach((key) => {
        const value = params?.[key] as string
        value && requstUrl.searchParams.append(key, value)
    })
    const response = await fetch(requstUrl.toString())
    return await response.json()
}

export default useFetch
