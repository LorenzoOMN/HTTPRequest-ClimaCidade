import { useState, type KeyboardEvent } from "react";
import useWeather from "../hooks/useWeather";
import ForecastCard from "./ForecastCard";
import CityList from "./CityList";

export default function WeatherSearch() {
  const [cityName, setCityName] = useState("");

  const { cities, findCities, forecast, loadingMessage, error } = useWeather();

  async function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
        if(cityName.trim()) {
            findCities(cityName.trim());
        }
    }
  }

  return (
    <>
      <input
        className="city-input"
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ex.: Jacareí"
      />
      {error && <p className="error message">{error}</p>}
      {loadingMessage && <p className="message">{loadingMessage}</p>}
      { cities.length > 0 && <CityList/> }
      { forecast && <ForecastCard/>}
    </>
  );
}
