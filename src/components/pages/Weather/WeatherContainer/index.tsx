import { FC, useEffect, useState } from 'react';
import WeatherBody from '../WeatherBody';
import './style.scss';
import { IWeatherContainerProps } from './types';
import { DateTime } from 'luxon';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../../../redux/actions/weatherAction';
import { IWeather, IWeatherData } from '../../../../redux/interfaces/weatherInterface';

interface ICity {
    city: {data: {}}
}
interface IWeatherApi {
    weather: {data: {}}
}
const WeatherContainer = () => {
    const dispatch = useDispatch();
    const {data: weather}:any = useSelector((state: IWeatherApi) => state.weather);
    const [cityValue, setCityValue] = useState('');
    const {data: city}:any = useSelector((state:ICity) => state.city)

    const searchCity = async (city: string) => {
        setCityValue(city);
    }
    console.log(weather)

    return (
        <div className='weather-container'>
            <ul>
                <li onClick={()=>console.log(weather)
                }>{city?.name}</li>
                <li>{weather?.lat}</li>
                {weather?.daily.forEach(day => {
                    <li>{day.feels_like.morn}</li>
                })}
            </ul>
            {/* <WeatherBody
              day={parsedData}
              iconCode={weather.code}
              minTemp={Math.round(weather.min_temp)}
              maxTemp={Math.round(weather.max_temp)}
              description={weather.description}
              key={datetime}
            /> */}
        </div>
    );
};

export default WeatherContainer;