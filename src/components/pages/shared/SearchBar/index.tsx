import { FC, useState, ChangeEvent, FormEvent } from 'react';
import './style.scss';
import { ISearchBarProps } from './types';
import { getCity } from "../../../../redux/actions/cityAction";
import { useDispatch, useSelector } from 'react-redux';

const SearchBar: FC<ISearchBarProps> = ({ city, searchCity }) => {
    const [value, setValue] = useState(city);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
    };

    const dispatch = useDispatch()

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        value === '' ? alert('City can not be empty') : searchCity(value);
        getCity(value)(dispatch);
    };

    return ( 
        
        <div className='searchbar' style={{height: (( city ) && (city ? '30vh' : '100vh'))}}>
            <div className='SearchBarChilds'>
                <h5 className='text-white'>Search weather on your city</h5>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type='text'
                        name='city'
                        id='inputSearchCity'
                        onChange={onChange}
                        value={value}
                        placeholder={'Search City...'}
                    />
                    <button type='submit' className='btn btn-outline-info text-white'>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;