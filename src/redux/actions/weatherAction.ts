import { Dispatch } from "redux";
import { weatherService } from "../../components/services/weatherService";
import { WEATHER_ACTIONS } from "./consts";

export function getWeather(lat: number, lon: number, part: string) {
    return function (dispatch: Dispatch) {
        dispatch({ type: WEATHER_ACTIONS.GET_WEATHER });

        weatherService
            .getWeather(lat, lon, part)

            .then(({ data }) => {
                dispatch({
                    type: WEATHER_ACTIONS.GET_WEATHER_SUCCESS,
                    payload: data,
                });
            })
            .catch((err: string) => {
                dispatch({
                    type: WEATHER_ACTIONS.GET_WEATHER_ERROR,
                    error: err,
                });
            });
    }
}

