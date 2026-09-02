import { createContext } from "react";
import type { City, Forecast } from "../types/weather";

export interface WeatherContextValue {
  cities: City[];
  findCities: (name: string) => void;
  cityForecast: (id: number) => void;
  forecast: Forecast | null;
  error: string;
  loadingMessage: string;
}

export const WeatherContext = createContext<WeatherContextValue | undefined>(
  undefined,
);
