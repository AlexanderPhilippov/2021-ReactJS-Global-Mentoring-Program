async function useFetch<T>(url: string): Promise<T> {
    const baseApiUrl = 'http://127.0.0.1:4000/'
    const response = await fetch(`${baseApiUrl}${url}`)
    return await response.json()
}

export default useFetch
