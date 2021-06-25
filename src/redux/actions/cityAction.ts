import { Dispatch } from "redux";
import { cityService } from "../../components/services/cityService";
import { WEATHER_ACTIONS } from "./consts";
import { getWeather } from "./weatherAction";

export function getCity(city: string) {
    return function (dispatch: Dispatch) {
        // dispatch({ type: WEATHER_ACTIONS.GET_CITY });

        cityService
            .getCity(city)

            .then(({ data }) => {
                dispatch({
                    type: WEATHER_ACTIONS.GET_CITY,
                    payload: data
                })
                getWeather(data.coord.lat, data.coord.lon, "monthly")(dispatch)
                
            })
            .catch((err: string) => {
                throw new Error("City does not find");
            });
    }
}

