export interface IWeather {
    id: number,
    main: string,
    weather: { code: number; };
    icon: string,
    min_temp: number,
    max_temp: number,
    datetime: string,
    description: string
}

export interface IWeatherData {
    lon: number,
    lat: number,
    timezone: string,
    timezone_offset: number,
    current: {
        dt: number,
        sunrise: number,
        sunset: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        visibility: number,
        wind: {
            speed: number,
            deg: number,
            gust: number,
        },
        weather: IWeather[]
    }
    minutely: [
        {
            dt: number,
            precipitation: number
        }
    ]
}

