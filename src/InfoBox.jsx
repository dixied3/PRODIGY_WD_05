import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css" ; 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox ({info}) {

    const INIT_URL = "https://media.istockphoto.com/id/1052047454/photo/sandstorm.jpg?s=612x612&w=is&k=20&c=JVPuaAGxoI7aHHNZv4Ja_15SQ14X_OaqtVJ0B2O7Mlc="

   const HOT_URL = "https://images.pexels.com/photos/1454752/pexels-photo-1454752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ; 
   const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ; 
   const RAINY_URL = "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ; 

    return(
        <div className="InfoBox">
            
           <div className='cardContainer'>
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp < 10 ? COLD_URL : info.humidity > 80 ? RAINY_URL : info.temp > 17 ? HOT_URL : COLD_URL} 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.temp < 10 ? <AcUnitIcon/> : info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 17 ? <WbSunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <div>Min Temp = {info.tempMin}</div>
          <div>Max Temp = {info.tempMax}</div>
          <div>Weather can be described as <em>{info.weather}</em> and feels like {info.feelsLike}&deg;C</div>

        </Typography>
      </CardContent>
    </Card>
           </div>
        </div>
    ) ; 
}