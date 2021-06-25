import { FC, useEffect } from 'react';
import WeatherBody from '../WeatherBody';
import './style.scss';
import { IWeatherContainerProps } from './types';
import { DateTime } from 'luxon';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../../../redux/actions/weatherAction';


export const WeatherContainer: FC<IWeatherContainerProps> = ({ city }) => {
    const dispatch = useDispatch()
    const weather = useSelector((state:any) => state)

    useEffect(() => {
        getWeather(40,40,'monthly')(dispatch) 
    }, [ ])

    console.log(weather)
    console.log(weather.weather)
    return (
        <div className='weather-container'>
            {city && <h5 className='cityName'>{city}</h5>}


        </div>
    );
};

export default WeatherContainer;