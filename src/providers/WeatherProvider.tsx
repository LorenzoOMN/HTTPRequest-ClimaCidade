import { useState, type ReactNode } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import type { City, Forecast } from "../types/weather";
import { getForecast, searchCities } from "../services/weatherService";

interface WeatherProviderProps {
  children: ReactNode;
}

export default function WeatherProvider({children}: WeatherProviderProps) {
  const [cities, setCities] = useState<City[]>([]);
  const [forecast, setForeCast] = useState<Forecast | null>(null);
  const [error, setError] = useState('');
  const [loadingMessage, setLoadingMessage] = useState("");

  async function findCities(name: string) {
    try {
      setLoadingMessage("Buscando cidades...");
      setError("");
      setCities([]);
      setForeCast(null);

      const foundCities = await searchCities(name);
      setCities(foundCities);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoadingMessage("");
    }
  }

  async function cityForecast(id: number) {
    try {
        setLoadingMessage("Buscando previsão...");
        setError("");
        setCities([]);
        setForeCast(null);

      const lista = await getForecast(id);
      setForeCast(lista);
    } catch (e: any) {
      setError(e.message);
    }finally {
        setLoadingMessage("");
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        cities,
        findCities,
        cityForecast,
        forecast,
        error,
        loadingMessage
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
