export const baseURL = 'http://localhost:8000'

export function delay(ms: number = 1000) {
    return new Promise<void>(resolve => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            resolve()
        }, ms)
    })
}
