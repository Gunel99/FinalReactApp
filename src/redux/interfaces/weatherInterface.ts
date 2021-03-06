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
        weather: IWeather
    }
    minutely: [
        {
            dt: number,
            precipitation: number
        }
    ],
    daily: [
        {
            clouds: number,
            dew_point: number,
            dt: number,
            feels_like: {
                day: number,
                eve: number,
                morn: number,
                night: number
            },
            humidity: number,
            moon_phase: number,
            moonrise: number,
            moonset: number,
            pop: number,
            pressure: number,
            sunrise: number,
            sunset: number,
            temp: {
                day: number,
                eve: number,
                max: number,
                min: number,
                morn: number,
                night: number,
            },
            weather: IWeather[],
            uvi: number,
            wind_deg: number,
            wind_gust: number,
            wind_speed: number,
        }
    ]
}

