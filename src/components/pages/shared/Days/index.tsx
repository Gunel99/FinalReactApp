import { FC, ReactElement } from 'react';
import './style.scss';
import { IDaysProps } from './types';

const Days: FC<IDaysProps> = ({ day }): any => {
    return (
        <div className='day'>
            {day}
        </div>
    )
}

export default Days;