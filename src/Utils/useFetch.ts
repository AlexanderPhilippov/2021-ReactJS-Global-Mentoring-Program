async function useFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
    const response = await fetch(input, init)
    return await response.json()
}

export default useFetch
