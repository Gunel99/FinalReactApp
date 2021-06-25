import { FC, useState } from 'react';
import './App.scss';
import WeatherContainer from './components/pages/Weather/WeatherContainer';
import SearchCity from './components/pages/shared/SearchCity';

const App: FC = () => {
  const [city, setCity] = useState('');

  const searchCity = async (city: string) => {
    setCity(city);
  }
  return (
    <>
      <WeatherContainer  />
      <SearchCity />
    </>
  );
}

export default App;
