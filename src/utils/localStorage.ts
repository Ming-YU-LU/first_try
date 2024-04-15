export const GET_TOKEN = (key: string) => {
    return localStorage.getItem(key)
}

export const SAVE_TOKEN = (key: string, value: string) => {
    localStorage.setItem(key, value)
}