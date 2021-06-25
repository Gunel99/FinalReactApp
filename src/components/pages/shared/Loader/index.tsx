import { FC } from 'react';
import Spinner from 'assets/Spinner.gif';
import './style.scss';
import { ILoaderProps } from './types';

const Loader: FC<ILoaderProps> = ({ message }): any => {
    return (
        <div className='loader'>
            <img src={Spinner} alt='Spinner' />
            <h6 className='text-center-mt-3'>{message}</h6>
        </div>
    )

};

export default Loader;