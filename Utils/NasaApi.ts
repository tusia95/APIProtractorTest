export module NasaApi {
    const APIKEY = `mclyliwTVpoqCTvC7zXnWhaVoeBd7ntUmvR5fvK2`;
    export const NasaApiUrl = `https://api.nasa.gov/planetary/apod`;
    export function GetApiEndPoint(picDate: string, isHd: boolean) {
        console.log(`====Prepare get string with parametrs: Data of picture = ${picDate}, quality of picture isHd = ${isHd}`)
        return `${NasaApiUrl}?api_key=${APIKEY}&date=${picDate}&hd=${isHd}`;
    }


}