import { HttpClient } from "../httpClient/httpClient";

class WeatherService extends HttpClient {
    constructor() {
        super("https://api.openweathermap.org/data/2.5");
    }

    getWeather(lat: number, lon: number, part: string) {
        // return this.get(`weather?q=${city},${country}&appid=8d2a110b6ad468ae1a0e459757cf659d&units=metric`);
        // return this.get(`${process.env.REACT_APP_WEATHER_API_URL}/daily?days=6&city=${city}&key=${process.env.REACT_APP_WEATHER_API_KEY}`);
        return this.get(`onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=2cbe784e47fc6c99e21c2fdcf902c075`);
    }

}

export const weatherService = new WeatherService();