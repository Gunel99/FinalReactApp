import { FC } from 'react';
import { IconCodeProps, renderIcon } from '../../utils';
import './style.scss';

const Icon: FC<IconCodeProps> = ({ iconCode }): any => {
    return (
        <div className='icon'>
            {renderIcon(iconCode)}
        </div>
    )
};

export default Icon;