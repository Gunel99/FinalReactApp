import { WEATHER_ACTIONS } from "../actions/consts";
import { IWeatherData } from "../interfaces/weatherInterface";

export interface LoadWeather {
    type: WEATHER_ACTIONS.GET_WEATHER,
    error: null,
    payload: null
}

export interface SuccessWeather {
    type: WEATHER_ACTIONS.GET_WEATHER_SUCCESS,
    payload: IWeatherData
}

export interface ErrorWeather {
    type: WEATHER_ACTIONS.GET_WEATHER_ERROR,
    payload: null,
    error: string
}

export type WeatherAction = LoadWeather | SuccessWeather | ErrorWeather;
