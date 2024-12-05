import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox ({info}) {

    const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/photo-1534250441079-1b355ffbab76?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxob3QlMjB0ZW1wZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1699705565815-50fb6709f8b2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW4lMjAlMjB0ZW1wZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    // let info = {
    //     city: "delhi",
    //     feelsLike: 23.11,
    //     humidity: 23,
    //     temp: 24.05,
    //     tempMax: 24.05,
    //     tempMin: 24.05,
    //     weather: "haze",
    // }


    return (
        <div className="Infobox">
        {/* <h2>Weather Info</h2> */}
        <div className='card'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80
            ? RAIN_URL 
            : info.temp > 20 
            ? HOT_URL 
            : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {info.humidity > 80
               ? <ThunderstormIcon /> 
               : info.temp > 20 
               ? <WbSunnyIcon />
               : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" color='text.secondary' component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>TemperatureMax = {info.tempMax}&deg;C</p>
         <p>Temperature = {info.tempMin}&deg;C</p>
         <p>The weather can be describesd as {info.weather} and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card> 
        </div>
        </div>
    )
}