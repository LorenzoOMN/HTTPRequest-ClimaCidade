import type { ApiErrorResponse, City, Forecast } from "../types/weather";


const API_URL = "https://brasilapi.com.br/api/cptec/v1";

export async function searchCities (name:string) {
    const cityName = encodeURIComponent(name);
    const response = await fetch(`${API_URL}/cidade/${cityName}`);

    if ( !response.ok ) {
        const error:ApiErrorResponse = await response.json();
        throw new Error(error.message || "Não possível buscar as cidades.");
    }
    
    const cities:City[] = await response.json();
    return cities;
}

export async function getForecast(id:number) {
    const response = await fetch(`${API_URL}/clima/previsao/${id}`);
    
    if ( !response.ok ) {
        const error:ApiErrorResponse = await response.json();
        throw new Error(error.message || "Não foi possível buscar a previsão do tempo");
    }
    
    const forecast:Forecast = await response.json();
    return forecast;
}