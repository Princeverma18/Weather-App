import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function Weather () {

    const[weatherInfo, setWeatherInfo] = useState("");

    // {
    //     city: "delhi",
    //     feelsLike: 23.11,
    //     humidity: 23,
    //     temp: 24.05,
    //     tempMax: 24.05,
    //     tempMin: 24.05,
    //     weather: "haze",
    // }


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            {weatherInfo ? ( // Conditionally render InfoBox
                <InfoBox info={weatherInfo} />
            ) : (
                <p>Please search for a city's weather information.</p>
            )}
        </div>
    )
}