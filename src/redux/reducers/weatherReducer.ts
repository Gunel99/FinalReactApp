import { WEATHER_ACTIONS } from "../actions/consts";
import { IWeatherData } from "../interfaces/interface";
import { ASYNC_STATUS } from "../store/consts";
import { WeatherAction } from "../types/types";

export interface IWeatherState {
    data: IWeatherData | null,
    status: string,
    error: string
};

const initialState: IWeatherState = {
    data: null,
    status: ASYNC_STATUS.IDLE,
    error: ''
};

export const weatherReducer = (state = initialState, action: WeatherAction): IWeatherState => {
    switch (action.type) {
        case WEATHER_ACTIONS.GET_WEATHER:
            return {
                ...state,
                data: null,
                error: '',
                status: ASYNC_STATUS.LOADING
            }
        case WEATHER_ACTIONS.GET_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: '',
                status: ASYNC_STATUS.SUCCESS
            }
        case WEATHER_ACTIONS.GET_WEATHER_ERROR:
            return {
                ...state,
                data: null,
                error: '',
                status: ASYNC_STATUS.ERROR
            }

        default:
            return state;
    }
};
