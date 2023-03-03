export async function service_http<T>(url:string):Promise<T> {
    console.log('URL',url)
    const response = await fetch(url);
    const data = await response.json()
    return data
}