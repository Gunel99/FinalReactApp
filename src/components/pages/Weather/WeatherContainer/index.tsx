import { FC, useEffect, useState } from 'react';
import WeatherBody from '../WeatherBody';
import './style.scss';
import { IWeatherContainerProps } from './types';
import { DateTime } from 'luxon';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../../../redux/actions/weatherAction';


interface ICity {
    city: {data: {}}
}
interface IWeather {
    weather: {data: {}}
}
const WeatherContainer = () => {
    const dispatch = useDispatch();
    const {data: weather}:any = useSelector((state: IWeather) => state.weather);
    const [cityValue, setCityValue] = useState('');
    const {data: city}:any = useSelector((state:ICity) => state.city)

    const searchCity = async (city: string) => {
        setCityValue(city);
    }
    // console.log(weather)

    return (
        <div className='weather-container'>
            <ul>
                <li onClick={()=>console.log(weather)
                }>{city?.name}</li>
                <li>{weather?.lat}</li>
            </ul>
        </div>
    );
};

export default WeatherContainer;