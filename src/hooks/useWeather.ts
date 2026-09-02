import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";


export default function useWeather() {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("udeWeather deve ser udado dentro de WeatherProvider");
    }
    return context;
}