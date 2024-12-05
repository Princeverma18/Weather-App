import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';



export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9f8e438cc4c7087459a5c417bf6d76d1";


    let getWeatherInfo = async () => {
       try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity, 
            feelsLike: jsonResponse.main.feels_like, 
            weather: jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
       }

       catch (error) {
        throw(error);
        }
    };

    

    let handleChange = (event) => {
        setCity(event.target.value);
    };


    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }
        catch(error){
            setError(true);
            setError ("");
        }
    };



    return (
        <div>
            {/* <h4>Search any city weather</h4> */}
            <form onSubmit={handleSubmit}>
            <TextField id="city"
                       label="city name"
                       variant="outlined" 
                       required
                       onChange={handleChange}
                       value={city}
                       />
            <br />
            <br />
            <Button variant="contained" className='box' type='submit'>Search</Button>
            {error && <p style={{color: "red"}}>No such place exist</p>}
            </form>
        </div>
    )
}