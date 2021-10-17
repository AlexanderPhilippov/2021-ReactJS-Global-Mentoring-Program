async function useFetch<T>(url: string): Promise<T> {
    const response = await fetch(url)
    return await response.json()
}

export default useFetch
