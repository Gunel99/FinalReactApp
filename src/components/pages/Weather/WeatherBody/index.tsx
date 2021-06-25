import { FC } from 'react';
import { Days, Icon, Temp } from '../../shared';
import './style.scss';
import { WeatherBodyProps } from './types';

const WeatherBody: FC<WeatherBodyProps> = ({
    day,
    iconCode,
    minTemp,
    maxTemp,
    description,
}) => {
    return (
        <div className='weather-body'>
            <Days day={day} />
            <Icon iconCode={iconCode} />
            <Temp minTemp={minTemp} maxTemp={maxTemp} description={description} />
        </div>
    );
};

export default WeatherBody;