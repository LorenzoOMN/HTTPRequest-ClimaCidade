import useWeather from "../hooks/useWeather";


export default function ForecastCard() {
    const {forecast} = useWeather();

    return (
        <section className="forecast">
            <h2 id="forecast-title">
                {forecast?.cidade} - {forecast?.estado}
            </h2>
            <div className="forecast-day">
                <p>Data: {formatDate(forecast?.clima[0].data ?? "")}</p>
                <p>Condiçao: {forecast?.clima[0].condicao_desc ?? ""}</p>
                <p>Temperatura mínima: {forecast?.clima[0].min} </p>
                <p>Temperatura máxima: {forecast?.clima[0].max} </p>
                <p>Índice UV: {forecast?.clima[0].indice_uv}</p>
            </div>
        </section>
    );
}


function formatDate(date:string) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}