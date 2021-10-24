async function useFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
    const response = await fetch(input, init)
    return (await response.status) !== 204 && response.ok
        ? await response.json()
        : await response
}

export default useFetch
