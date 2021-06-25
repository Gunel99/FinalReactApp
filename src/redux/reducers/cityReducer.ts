import { WEATHER_ACTIONS } from "../actions/consts";
import { ICoord } from "../interfaces/cityInterface";

export interface ICityState {
    data: ICoord | null
};

const initialState: ICityState = {
    data: null
};

export const cityReducer = (state = initialState, action: any): ICityState => {
    switch (action.type) {
        case WEATHER_ACTIONS.GET_CITY:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }
};