import { FC } from 'react';
import './style.scss';
import { ITempProps } from './types';

const Temp: FC<ITempProps> = ({ minTemp, maxTemp }) => {
    return (
        <div className="temperature">
            <span className='min'>{minTemp}&#176;</span>
            <span className='max'>{maxTemp}&#176;</span>
        </div>
    )
};

export default Temp;