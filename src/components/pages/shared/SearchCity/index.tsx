import { FC, useState } from 'react';
import SearchBar from "../SearchBar/index";

const SearchCity: FC = () => {
    const [city, setCity] = useState('');

    const searchCity = async (city: string) => {
        setCity(city);
    }

    return (
        <div>
            <SearchBar city={city} searchCity={searchCity} />
        </div>
    )
}

export default SearchCity;
